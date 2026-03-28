import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { fetchLanguages, translateBatch } from '../lib/translate'

const strings = {
  // Hero
  'Smarter': 'Smarter',
  'Financial Tools. Built for You.': 'Financial Tools. Built for You.',
  'KwikBudget brings budgets, transfers, and investments together so you can see the full picture—and act on it—in seconds, not spreadsheets.':
    'KwikBudget brings budgets, transfers, and investments together so you can see the full picture—and act on it—in seconds, not spreadsheets.',
  'Get Started': 'Get Started',
  'Learn More': 'Learn More',
  'Menu': 'Menu',
  'Total balance': 'Total balance',
  'Spending trend': 'Spending trend',

  // Trust Banner
  'Get in on the growth of 5K+ companies': 'Get in on the growth of 5K+ companies',

  // Features
  'Manage Your Money, All in One Place.': 'Manage Your Money, All in One Place.',
  'Real-Time Analytics': 'Real-Time Analytics',
  'Live dashboards that surface trends before they become surprises.':
    'Live dashboards that surface trends before they become surprises.',
  'Instant Transfers': 'Instant Transfers',
  'Send money domestically or cross-border with clear fees and instant confirmations.':
    'Send money domestically or cross-border with clear fees and instant confirmations.',
  'Budgeting Tools': 'Budgeting Tools',
  'Envelope-style budgets, alerts, and auto-categorization built in.':
    'Envelope-style budgets, alerts, and auto-categorization built in.',
  'Global Payments': 'Global Payments',
  'Pay and get paid in the currencies your life actually uses.':
    'Pay and get paid in the currencies your life actually uses.',
  'Crypto & Investment': 'Crypto & Investment',
  'Track tokens and traditional holdings alongside everyday cash flow.':
    'Track tokens and traditional holdings alongside everyday cash flow.',
  'Weekly spend': 'Weekly spend',

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
  'KwikBudget is designed with enterprise-grade safeguards and transparent controls so you stay in charge of every login, device, and approval.':
    'KwikBudget is designed with enterprise-grade safeguards and transparent controls so you stay in charge of every login, device, and approval.',
  'End-to-end encryption for sensitive sessions and documents':
    'End-to-end encryption for sensitive sessions and documents',
  'Real-time fraud monitoring and instant freeze tools':
    'Real-time fraud monitoring and instant freeze tools',
  'SOC 2-aligned practices and routine third-party audits':
    'SOC 2-aligned practices and routine third-party audits',
  'Granular permissions for teams and accountants':
    'Granular permissions for teams and accountants',

  // FAQ
  'Frequently Asked Question': 'Frequently Asked Question',
  'Is my data safe?': 'Is my data safe?',
  'Yes. KwikBudget encrypts data in transit and at rest, supports hardware-backed keys where available, and lets you review every active session from one place.':
    'Yes. KwikBudget encrypts data in transit and at rest, supports hardware-backed keys where available, and lets you review every active session from one place.',
  'Can I connect my existing bank accounts?': 'Can I connect my existing bank accounts?',
  'You can link compatible accounts through our secure partners. Availability varies by region and institution.':
    'You can link compatible accounts through our secure partners. Availability varies by region and institution.',
  'Do you support teams and accountants?': 'Do you support teams and accountants?',
  'Yes. Invite collaborators with role-based access, export reports, and share read-only views with your accountant.':
    'Yes. Invite collaborators with role-based access, export reports, and share read-only views with your accountant.',
  'What does pricing look like?': 'What does pricing look like?',
  'We offer a generous free tier for individuals and plans for teams that need advanced approvals and reporting.':
    'We offer a generous free tier for individuals and plans for teams that need advanced approvals and reporting.',

  // Footer
  'KwikBudget helps people and teams move money with clarity—budgeting, transfers, and investments in one place.':
    'KwikBudget helps people and teams move money with clarity—budgeting, transfers, and investments in one place.',
  'Quick Links': 'Quick Links',
  'Legal': 'Legal',
  'Features': 'Features',
  'Privacy': 'Privacy',
  'Terms': 'Terms',
  'Cookies': 'Cookies',
  'FAQ': 'FAQ',
  'Start Managing Your Money Smarter Today': 'Start Managing Your Money Smarter Today',
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
        // Only apply if this is still the latest request
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