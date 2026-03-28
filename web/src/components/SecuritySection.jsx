import { IsometricPhone } from './IsometricPhone'
import { useTranslation } from '../context/TranslationContext'

const shellA =
  '[transform:perspective(1400px)_rotateX(6deg)_rotateY(-8deg)_rotateZ(-6deg)_scale(0.95)]'
const shellB =
  '[transform:perspective(1400px)_rotateX(6deg)_rotateY(6deg)_rotateZ(5deg)_scale(0.93)_translateY(20px)]'

export function SecuritySection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-[72px] pb-20" id="security">
      <div className="mx-auto grid max-w-[1200px] grid-cols-3 items-center gap-9 px-6 max-[960px]:grid-cols-1 max-[960px]:text-center">
        <div className="max-[960px]:order-1">
          <h2 className="mb-6 max-w-[20ch] font-sans text-[clamp(1.5rem,2.5vw,2.1rem)] font-extrabold leading-tight tracking-tight text-kwik-black max-[960px]:mx-auto">
            {t('Your Security Is Our Top Priority')}
          </h2>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full border-2 border-kwik-lime bg-kwik-lime px-[26px] py-3.5 font-sans text-[0.95rem] font-bold text-kwik-black no-underline transition-colors hover:border-kwik-lime-hover hover:bg-kwik-lime-hover"
          >
            {t('Get Started')}
          </a>
        </div>
        <div className="max-[960px]:order-2">
          <div className="flex min-h-[400px] items-end justify-center gap-3 max-[960px]:min-h-[340px]">
            <IsometricPhone
              tilt="left"
              shellClassName={shellA}
              screenshot={{ src: '/screenshots/profile.png', alt: '' }}
            />
            <IsometricPhone
              tilt="right"
              shellClassName={shellB}
              screenshot={{ src: '/screenshots/home.png', alt: '' }}
            />
          </div>
        </div>
        <div className="max-[960px]:order-3">
          <p className="mb-4 font-sans text-[0.98rem] leading-[1.55] text-[#3d3d3d]">
            {t("Your budget rules only work if you trust the app holding the lock. KwikBudget is built so you can see what's protected, what's spendable today, and who's signed in—without giving up control when life gets messy.")}
          </p>
          <ul className="m-0 list-disc pl-[1.15rem] font-sans text-[0.92rem] leading-[1.55] text-[#444] max-[960px]:mx-auto max-[960px]:max-w-[480px] max-[960px]:text-left">
            <li className="mb-2.5 last:mb-0">
              {t('Encryption for data in transit and at rest, plus secure sign-in options on mobile')}
            </li>
            <li className="mb-2.5 last:mb-0">
              {t("Clear separation between locked funds, today's allowance, and emergency unlock events")}
            </li>
            <li className="mb-2.5 last:mb-0">
              {t('Device and session visibility so you can spot anything unusual quickly')}
            </li>
            <li className="mb-2.5 last:mb-0">
              {t('Honest logging of unlocks and consequences—no hidden taps that drain your plan')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
