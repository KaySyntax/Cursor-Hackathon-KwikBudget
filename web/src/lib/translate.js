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

async function translateOne(text, targetLanguage) {
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
  if (!res.ok) throw new Error('Translation failed')
  const data = await res.json()
  return data.message || text
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const cache = new Map()

// Send 10 at a time with 150ms gap — fast but avoids hammering
const BATCH_SIZE = 10
const BATCH_DELAY = 150

export async function translateBatch(texts, targetLanguage, onProgress) {
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

  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE)

    const settled = await Promise.allSettled(
      batch.map((text) => translateOne(text, targetLanguage)),
    )

    batch.forEach((text, j) => {
      const result = settled[j]
      const translated = result.status === 'fulfilled' ? result.value : text
      const key = `${targetLanguage}:${text}`
      cache.set(key, translated)
      results[text] = translated
    })

    // Let the UI update progressively after each batch
    if (onProgress) onProgress({ ...results })

    if (i + BATCH_SIZE < toTranslate.length) {
      await delay(BATCH_DELAY)
    }
  }

  return results
}
