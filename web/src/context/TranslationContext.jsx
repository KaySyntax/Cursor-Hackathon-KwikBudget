import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { fetchLanguages, translateBatch } from '../lib/translate'

const strings = {
  // Hero
  'Smarter': 'Smarter',
  'Spending. One Day at a Time.': 'Spending. One Day at a Time.',
  "KwikBudget doesn't just track your money—it controls how you spend it. Lock your funds for the month, get a fixed daily allowance, and avoid blowing cash in week one. Built for students, young professionals, and anyone on a fixed income. Need more today? Emergency unlock is there—with clear trade-offs so discipline and flexibility stay balanced.":
    "KwikBudget doesn't just track your money—it controls how you spend it. Lock your funds for the month, get a fixed daily allowance, and avoid blowing cash in week one. Built for students, young professionals, and anyone on a fixed income. Need more today? Emergency unlock is there—with clear trade-offs so discipline and flexibility stay balanced.",
  'Get Started': 'Get Started',
  'Learn More': 'Learn More',
  'Menu': 'Menu',

  // Trust Banner
  "For students, young professionals, and anyone on a fixed income who's tired of running out of money before the month ends.":
    "For students, young professionals, and anyone on a fixed income who's tired of running out of money before the month ends.",

  // Features
  'Not just tracking—real spending control.': 'Not just tracking—real spending control.',
  'Set your total and time period, let KwikBudget lock the rest, and live on a daily wallet that resets every morning. Simple on the surface, strict where it counts.':
    'Set your total and time period, let KwikBudget lock the rest, and live on a daily wallet that resets every morning. Simple on the surface, strict where it counts.',
  'Daily Wallet': 'Daily Wallet',
  "You can only spend what's unlocked for that day—so you don't overspend early and scrape by later. Your allowance is automatic; your excuses aren't.":
    "You can only spend what's unlocked for that day—so you don't overspend early and scrape by later. Your allowance is automatic; your excuses aren't.",
  'Smart Lock': 'Smart Lock',
  'Money stays locked in the app for your chosen period. The daily engine releases funds gradually—no more "I\'ll fix it next week."':
    'Money stays locked in the app for your chosen period. The daily engine releases funds gradually—no more "I\'ll fix it next week."',
  'Budget setup': 'Budget setup',
  'Enter your total (e.g. GHS 600) and how long it needs to last (e.g. 30 days). KwikBudget handles the math and the lock.':
    'Enter your total (e.g. GHS 600) and how long it needs to last (e.g. 30 days). KwikBudget handles the math and the lock.',
  'Emergency unlock': 'Emergency unlock',
  "Life doesn't pause for budgets. Access extra when you need it—but your future daily allowance adjusts, so discipline and flexibility stay balanced.":
    "Life doesn't pause for budgets. Access extra when you need it—but your future daily allowance adjusts, so discipline and flexibility stay balanced.",
  'Insights & habits': 'Insights & habits',
  'See spending patterns, streak days you stayed on budget, and where your money actually goes—without spreadsheet fatigue.':
    'See spending patterns, streak days you stayed on budget, and where your money actually goes—without spreadsheet fatigue.',

  // Testimonials
  'Hear From Our Happy Users.': 'Hear From Our Happy Users.',
  'KwikBudget replaced three apps for our team. The live analytics alone paid for itself in week one.':
    'KwikBudget replaced three apps for our team. The live analytics alone paid for itself in week one.',
  'Transfers are fast and the security controls give our finance lead real peace of mind.':
    'Transfers are fast and the security controls give our finance lead real peace of mind.',
  'Finally one place for budgets, crypto tracking, and day-to-day banking. Radically simple.':
    'Finally one place for budgets, crypto tracking, and day-to-day banking. Radically simple.',

  // Security
  'Your Security Is Our Top Priority': 'Your Security Is Our Top Priority',
  'Security': 'Security',
  '2FA enabled': '2FA enabled',
  'Biometric lock': 'Biometric lock',
  'Session devices': 'Session devices',
  "Your budget rules only work if you trust the app holding the lock. KwikBudget is built so you can see what's protected, what's spendable today, and who's signed in—without giving up control when life gets messy.":
    "Your budget rules only work if you trust the app holding the lock. KwikBudget is built so you can see what's protected, what's spendable today, and who's signed in—without giving up control when life gets messy.",
  'Encryption for data in transit and at rest, plus secure sign-in options on mobile':
    'Encryption for data in transit and at rest, plus secure sign-in options on mobile',
  "Clear separation between locked funds, today's allowance, and emergency unlock events":
    "Clear separation between locked funds, today's allowance, and emergency unlock events",
  'Device and session visibility so you can spot anything unusual quickly':
    'Device and session visibility so you can spot anything unusual quickly',
  'Honest logging of unlocks and consequences—no hidden taps that drain your plan':
    'Honest logging of unlocks and consequences—no hidden taps that drain your plan',

  // FAQ
  'Frequently Asked Question': 'Frequently Asked Question',
  'Is my data safe?': 'Is my data safe?',
  "Yes. We use industry-standard encryption, protect sign-in on your phone, and keep a clear record of sessions and sensitive actions—so your money rules aren't easy to bypass or hide.":
    "Yes. We use industry-standard encryption, protect sign-in on your phone, and keep a clear record of sessions and sensitive actions—so your money rules aren't easy to bypass or hide.",
  'How is KwikBudget different from other budgeting apps?': 'How is KwikBudget different from other budgeting apps?',
  'Most apps only track what you spent. KwikBudget actively limits what you can spend by locking your funds and releasing a fixed daily allowance. Discipline is enforced by the product—not by willpower alone.':
    'Most apps only track what you spent. KwikBudget actively limits what you can spend by locking your funds and releasing a fixed daily allowance. Discipline is enforced by the product—not by willpower alone.',
  'How does the daily allowance work?': 'How does the daily allowance work?',
  'You set a total amount and a time period (for example, GHS 600 over 30 days). The app locks the full amount, calculates your daily slice, and only that portion is available to spend each day—helping you pace through the whole period.':
    'You set a total amount and a time period (for example, GHS 600 over 30 days). The app locks the full amount, calculates your daily slice, and only that portion is available to spend each day—helping you pace through the whole period.',
  'What happens if I use Emergency Unlock?': 'What happens if I use Emergency Unlock?',
  "You can access extra money when you truly need it, but KwikBudget balances flexibility with accountability: expect a smaller future daily allowance, a cooldown before the next unlock, or similar guardrails—so emergencies don't erase your plan.":
    "You can access extra money when you truly need it, but KwikBudget balances flexibility with accountability: expect a smaller future daily allowance, a cooldown before the next unlock, or similar guardrails—so emergencies don't erase your plan.",
  'What does pricing look like?': 'What does pricing look like?',
  'We plan a solid free experience for individuals, with premium options for advanced analytics, multiple budgets, and gamified rewards. Some flows may include small fees (for example on certain withdrawals)—always shown upfront.':
    'We plan a solid free experience for individuals, with premium options for advanced analytics, multiple budgets, and gamified rewards. Some flows may include small fees (for example on certain withdrawals)—always shown upfront.',

  // Footer
  'KwikBudget locks your money for the month and releases it as a daily allowance—so you build real discipline, dodge end-of-month panic, and still have emergency unlock when life refuses to cooperate.':
    'KwikBudget locks your money for the month and releases it as a daily allowance—so you build real discipline, dodge end-of-month panic, and still have emergency unlock when life refuses to cooperate.',
  'Quick Links': 'Quick Links',
  'Legal': 'Legal',
  'Features': 'Features',
  'Privacy': 'Privacy',
  'Terms': 'Terms',
  'Cookies': 'Cookies',
  'FAQ': 'FAQ',
  'Stop surviving the month. Start owning each day.': 'Stop surviving the month. Start owning each day.',
  'All rights reserved.': 'All rights reserved.',
}

const TranslationContext = createContext(null)

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [languages, setLanguages] = useState({ en: 'English' })
  const [translations, setTranslations] = useState(strings)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLanguages()
      .then(setLanguages)
      .catch(() => setLanguages({ en: 'English' }))
  }, [])

  const requestRef = useRef(0)

  const changeLanguage = useCallback(
    async (lang) => {
      if (lang === language) return
      setLanguage(lang)

      if (lang === 'en') {
        setTranslations(strings)
        return
      }

      const requestId = ++requestRef.current
      setLoading(true)
      try {
        const keys = Object.keys(strings)
        const result = await translateBatch(keys, lang)
        if (requestRef.current === requestId) {
          setTranslations(result)
        }
      } catch {
        if (requestRef.current === requestId) {
          setTranslations(strings)
        }
      } finally {
        if (requestRef.current === requestId) {
          setLoading(false)
        }
      }
    },
    [language],
  )

  const t = useCallback(
    (key) => translations[key] ?? key,
    [translations],
  )

  return (
    <TranslationContext.Provider value={{ t, language, languages, changeLanguage, loading }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(TranslationContext)
  if (!ctx) throw new Error('useTranslation must be used within TranslationProvider')
  return ctx
}
