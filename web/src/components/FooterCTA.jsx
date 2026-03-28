import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { IsometricPhone } from './IsometricPhone'
import { useTranslation } from '../context/TranslationContext'

const footerShell = '[transform:perspective(1400px)_rotateX(12deg)_rotateZ(8deg)]'

export function FooterCTA() {
  const { t } = useTranslation()

  return (
    <footer className="bg-white px-6 pb-12">
      <div
        className="relative mx-auto max-w-[1200px] rounded-[28px] bg-kwik-forest px-9 pb-7 pt-10 text-kwik-white shadow-[0_24px_48px_rgba(10,31,20,0.18),0_0_0_1px_rgba(200,255,74,0.08)] max-[960px]:px-8"
        id="cta"
      >
        <div className="grid grid-cols-[1.1fr_1fr_1.1fr] items-start gap-8 max-[960px]:grid-cols-1">
          <div>
            <Logo />
            <p className="mt-4 max-w-[32ch] font-sans text-[0.92rem] leading-[1.55] text-kwik-muted max-[960px]:max-w-none">
              {t('KwikBudget locks your money for the month and releases it as a daily allowance—so you build real discipline, dodge end-of-month panic, and still have emergency unlock when life refuses to cooperate.')}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-6" aria-label="Quick links">
            <div>
              <h3 className="m-0 mb-3.5 font-sans text-[0.85rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                {t('Quick Links')}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                <li>
                  <Link
                    to="/features"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('Features')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('Security')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('FAQ')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="m-0 mb-3.5 font-sans text-[0.85rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                {t('Legal')}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                <li>
                  <Link
                    to="/privacy"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('Privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('Terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    {t('Cookies')}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="relative min-h-[220px] overflow-hidden rounded-[20px] bg-kwik-lime px-[22px] pb-[120px] pt-6 text-kwik-black max-[960px]:pb-[100px]">
            <p className="relative z-10 m-0 mb-4 max-w-[18ch] font-sans text-[1.15rem] font-extrabold leading-tight">
              {t('Stop surviving the month. Start owning each day.')}
            </p>
            <Link
              to="/"
              className="relative z-10 inline-flex rounded-full bg-kwik-black px-[22px] py-3 font-sans text-[0.9rem] font-extrabold text-kwik-lime no-underline transition-opacity active:scale-[0.98] hover:opacity-90"
            >
              {t('Get Started')}
            </Link>
            <div className="absolute -bottom-14 -right-4 z-0 -rotate-12">
              <IsometricPhone
                tilt="right"
                compact
                shellClassName={footerShell}
                screenshot={{ src: '/screenshots/wallet.png', alt: '' }}
              />
            </div>
          </div>
        </div>
        <p className="mt-7 text-center font-sans text-[0.8rem] text-kwik-muted">
          © {new Date().getFullYear()} KwikBudget. {t('All rights reserved.')}
        </p>
      </div>
    </footer>
  )
}
