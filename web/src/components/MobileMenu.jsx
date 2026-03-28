import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../context/TranslationContext'

export function MobileMenu({ open, onClose }) {
  const { t } = useTranslation()
  const panelRef = useRef(null)

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  const navSections = [
    {
      heading: t('Navigate'),
      links: [
        { label: t('Features'), href: '#features', type: 'anchor' },
        { label: t('Security'), href: '#security', type: 'anchor' },
        { label: t('Testimonials'), href: '#testimonials', type: 'anchor' },
        { label: t('FAQ'), href: '#faq', type: 'anchor' },
      ],
    },
    {
      heading: t('Pages'),
      links: [
        { label: t('Features'), to: '/features', type: 'route' },
        { label: t('Security'), to: '/security', type: 'route' },
        { label: t('FAQ'), to: '/faq', type: 'route' },
      ],
    },
    {
      heading: t('Legal'),
      links: [
        { label: t('Privacy'), to: '/privacy', type: 'route' },
        { label: t('Terms'), to: '/terms', type: 'route' },
        { label: t('Cookies'), to: '/cookies', type: 'route' },
      ],
    },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('Menu')}
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-[420px] flex-col bg-kwik-forest text-kwik-white shadow-[-8px_0_32px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-2">
          <span className="font-sans text-[1.1rem] font-extrabold tracking-tight text-white">
            {t('Menu')}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label={t('Close menu')}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav content */}
        <nav className="flex-1 overflow-y-auto px-7 pt-4 pb-6">
          {navSections.map((section) => (
            <div key={section.heading} className="mb-7 last:mb-0">
              <h3 className="mb-3 font-sans text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-kwik-lime">
                {section.heading}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                {section.links.map((link) => (
                  <li key={link.label + (link.href || link.to)}>
                    {link.type === 'anchor' ? (
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-sans text-[1rem] font-medium text-kwik-muted no-underline transition-colors hover:bg-white/8 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-sans text-[1rem] font-medium text-kwik-muted no-underline transition-colors hover:bg-white/8 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="border-t border-white/10 px-7 py-6">
          <a
            href="#cta"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-kwik-lime px-6 py-3.5 font-sans text-[0.95rem] font-bold text-kwik-black no-underline transition-colors hover:bg-kwik-lime-hover"
          >
            {t('Get Started')}
          </a>
        </div>
      </div>
    </>
  )
}
