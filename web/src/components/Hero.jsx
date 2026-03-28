import { Logo } from './Logo'
import { IsometricPhone } from './IsometricPhone'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslation } from '../context/TranslationContext'

function SparkleGraphic() {
  return (
    <span className="inline-flex shrink-0" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4 L27 17 L40 20 L27 23 L24 36 L21 23 L8 20 L21 17 Z"
          stroke="#c8ff4a"
          strokeWidth="2"
          fill="rgba(200,255,74,0.15)"
        />
        <circle cx="38" cy="10" r="3" fill="#c8ff4a" opacity="0.9" />
      </svg>
    </span>
  )
}

export function Hero() {
  const { t } = useTranslation()

  return (
    <header
      className="relative overflow-hidden bg-kwik-forest text-kwik-white"
      id="top"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_30%_20%,black_20%,transparent_70%)] bg-[linear-gradient(rgba(200,255,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,74,0.04)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-[72px] pt-7">
        <div className="mb-12 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              className="cursor-pointer rounded-full border-none bg-kwik-lime px-[18px] py-2.5 font-sans text-[0.85rem] font-bold text-kwik-black transition-colors active:scale-[0.98] hover:bg-kwik-lime-hover"
            >
              {t('Menu')}
            </button>
          </div>
        </div>

        <div className="grid items-center gap-10 max-[900px]:grid-cols-1 grid-cols-2">
          <div className="max-[900px]:order-2 max-[900px]:text-center">
            <h1 className="mb-5 text-left font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-white max-[900px]:mx-auto max-[900px]:text-center">
              <span className="inline-flex items-center gap-1.5 align-middle max-[900px]:justify-center">
                <SparkleGraphic />
                <span>{t('Smarter')}</span>
              </span>{' '}
              {t('Spending. One Day at a Time.')}
            </h1>
            <p className="mb-7 max-w-[40rem] text-left font-sans text-[1.05rem] leading-[1.55] text-kwik-muted max-[900px]:mx-auto max-[900px]:text-center">
              {t("KwikBudget doesn't just track your money—it controls how you spend it. Lock your funds for the month, get a fixed daily allowance, and avoid blowing cash in week one. Built for students, young professionals, and anyone on a fixed income. Need more today? Emergency unlock is there—with clear trade-offs so discipline and flexibility stay balanced.")}
            </p>
            <div className="flex flex-wrap gap-3.5 max-[900px]:justify-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full border-2 border-kwik-lime bg-kwik-lime px-[26px] py-3.5 font-sans text-[0.95rem] font-bold text-kwik-black no-underline transition-colors hover:border-kwik-lime-hover hover:bg-kwik-lime-hover"
              >
                {t('Get Started')}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-kwik-outline bg-transparent px-[26px] py-3.5 font-sans text-[0.95rem] font-bold text-white no-underline transition-colors hover:border-kwik-lime hover:text-kwik-lime"
              >
                {t('Learn More')}
              </a>
            </div>
          </div>
          <div className="flex min-h-[300px] items-end justify-end gap-2 max-[900px]:order-1 max-[900px]:min-h-[240px] max-[900px]:justify-center">
            <IsometricPhone
              tilt="left"
              float
              screenshot={{ src: '/screenshots/home.png', alt: '' }}
            />
            <IsometricPhone
              tilt="right"
              float
              screenshot={{ src: '/screenshots/budget.png', alt: '' }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
