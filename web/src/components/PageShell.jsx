import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslation } from '../context/TranslationContext'

export function PageShell({ children }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh flex flex-col bg-white">
      <header className="bg-kwik-forest text-kwik-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <Link to="/" className="no-underline text-inherit">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/"
              className="rounded-full bg-kwik-lime px-[18px] py-2.5 font-sans text-[0.85rem] font-bold text-kwik-black no-underline transition-colors hover:bg-kwik-lime-hover"
            >
              {t('Menu')}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-kwik-forest/10 bg-kwik-forest text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
            <div className="max-[900px]:col-span-2 max-[500px]:col-span-1">
              <Logo />
              <p className="mt-3 max-w-[28ch] font-sans text-[0.85rem] leading-[1.55] text-kwik-muted">
                Control how you spend, one day at a time.
              </p>
            </div>
            <div>
              <h4 className="m-0 mb-3 font-sans text-[0.8rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                Product
              </h4>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li><Link to="/features" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('Features')}</Link></li>
                <li><Link to="/security" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('Security')}</Link></li>
                <li><Link to="/faq" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('FAQ')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="m-0 mb-3 font-sans text-[0.8rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                Legal
              </h4>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li><Link to="/privacy" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('Privacy')}</Link></li>
                <li><Link to="/terms" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('Terms')}</Link></li>
                <li><Link to="/cookies" className="font-sans text-[0.88rem] text-kwik-muted no-underline hover:text-white">{t('Cookies')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="m-0 mb-3 font-sans text-[0.8rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                Get Started
              </h4>
              <Link
                to="/"
                className="inline-flex rounded-full bg-kwik-lime px-5 py-2.5 font-sans text-[0.85rem] font-bold text-kwik-black no-underline hover:bg-kwik-lime-hover"
              >
                {t('Get Started')}
              </Link>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-center font-sans text-[0.78rem] text-kwik-muted">
            © {new Date().getFullYear()} KwikBudget. {t('All rights reserved.')}
          </p>
        </div>
      </footer>
    </div>
  )
}
