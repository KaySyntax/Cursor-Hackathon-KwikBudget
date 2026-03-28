const API_URL = 'https://translation-api.ghananlp.org/v1'
const API_KEY = import.meta.env.VITE_GHANANLP_API_KEY

export async function fetchLanguages() {
  const res = await fetch(`${API_URL}/languages`, {
    headers: {
      'Cache-Control': 'no-cache',
      'Ocp-Apim-Subscription-Key': API_KEY,
    },
  })
  if (!res.ok) throw new Error('Failed to fetch languages')
  const data = await res.json()
  return data.languages
}

async function translateTextWithRetry(text, targetLanguage, retries = 2) {
  if (!text?.trim() || targetLanguage === 'en') return text

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`${API_URL}/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Ocp-Apim-Subscription-Key': API_KEY,
        },
        body: JSON.stringify({
          text,
          source_language: 'en',
          target_language: targetLanguage,
        }),
      })
      if (res.status === 429) {
        await delay(1000 * (attempt + 1))
        continue
      }
      if (!res.ok) throw new Error('Translation failed')
      const data = await res.json()
      return data.message || text
    } catch (err) {
      if (attempt < retries) {
        await delay(500 * (attempt + 1))
        continue
      }
      throw err
    }
  }
  return text
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const cache = new Map()

const BATCH_SIZE = 5
const BATCH_DELAY = 300

export async function translateBatch(texts, targetLanguage) {
  if (targetLanguage === 'en') {
    return Object.fromEntries(texts.map((t) => [t, t]))
  }

  const results = {}
  const toTranslate = []

  for (const text of texts) {
    const key = `${targetLanguage}:${text}`
    if (cache.has(key)) {
      results[text] = cache.get(key)
    } else {
      toTranslate.push(text)
    }
  }

  // Process in small batches to avoid rate limits
  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE)

    const settled = await Promise.allSettled(
      batch.map((text) => translateTextWithRetry(text, targetLanguage)),
    )

    batch.forEach((text, j) => {
      const result = settled[j]
      const translated = result.status === 'fulfilled' ? result.value : text
      const key = `${targetLanguage}:${text}`
      cache.set(key, translated)
      results[text] = translated
    })

    // Wait between batches to respect rate limits
    if (i + BATCH_SIZE < toTranslate.length) {
      await delay(BATCH_DELAY)
    }
  }

  return results
}
