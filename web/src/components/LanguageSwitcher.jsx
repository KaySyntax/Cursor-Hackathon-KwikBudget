import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../context/TranslationContext'

export function LanguageSwitcher() {
  const { language, languages, changeLanguage, loading } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const currentLabel = languages[language] || 'English'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-kwik-outline bg-transparent px-3.5 py-2 font-sans text-[0.82rem] font-bold text-white transition-colors hover:border-kwik-lime hover:text-kwik-lime"
        aria-label="Change language"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{currentLabel}</span>
        {loading && (
          <span className="ml-1 inline-block size-3 animate-spin rounded-full border-2 border-kwik-lime border-t-transparent" />
        )}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 max-h-72 w-44 overflow-y-auto rounded-xl border border-kwik-outline bg-kwik-forest-mid p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                changeLanguage(code)
                setOpen(false)
              }}
              className={`flex w-full cursor-pointer items-center gap-2 rounded-lg border-none px-3 py-2.5 text-left font-sans text-[0.85rem] font-semibold transition-colors ${
                code === language
                  ? 'bg-kwik-lime/20 text-kwik-lime'
                  : 'bg-transparent text-white hover:bg-white/10'
              }`}
            >
              {code === language && (
                <span className="text-kwik-lime" aria-hidden="true">✓</span>
              )}
              <span className={code === language ? '' : 'ml-5'}>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}