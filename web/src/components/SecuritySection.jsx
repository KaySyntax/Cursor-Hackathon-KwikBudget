import { IsometricPhone } from './IsometricPhone'
import { useTranslation } from '../context/TranslationContext'

function SecurityScreen({ t }) {
  return (
    <div className="flex h-full flex-col px-3 py-3.5">
      <div className="mb-3 font-sans text-[0.9rem] font-extrabold text-white">{t('Security')}</div>
      <ul className="m-0 mb-4 flex list-none flex-col gap-2 p-0 text-[0.68rem] text-kwik-muted">
        <li className="flex gap-1.5">
          <span className="font-bold text-kwik-lime">✓</span>
          {t('2FA enabled')}
        </li>
        <li className="flex gap-1.5">
          <span className="font-bold text-kwik-lime">✓</span>
          {t('Biometric lock')}
        </li>
        <li className="flex gap-1.5">
          <span className="font-bold text-kwik-lime">✓</span>
          {t('Session devices')}
        </li>
      </ul>
      <div className="relative mt-auto flex h-7 items-center rounded-full bg-black/35 px-1">
        <span className="absolute left-1 size-[22px] rounded-full bg-white" />
        <span className="ml-auto h-5 w-[36%] rounded-full bg-kwik-lime" />
      </div>
    </div>
  )
}

function DashboardMini() {
  return (
    <div className="flex h-full flex-col px-3 py-3.5">
      <div className="mb-3.5 font-sans text-[1.1rem] font-extrabold text-white">$8,420</div>
      <div className="flex flex-1 items-end gap-1">
        {[50, 70, 45, 80].map((h, i) => (
          <span
            key={i}
            className="min-h-[20%] flex-1 rounded-t bg-gradient-to-t from-kwik-lime/20 to-kwik-lime/90"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

const shellA =
  '[transform:perspective(1200px)_rotateX(8deg)_rotateY(-10deg)_rotateZ(-8deg)_scale(1.05)]'
const shellB =
  '[transform:perspective(1200px)_rotateX(8deg)_rotateY(8deg)_rotateZ(6deg)_scale(1.02)_translateY(16px)]'

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
          <div className="flex min-h-[320px] items-end justify-center gap-1 max-[960px]:min-h-[280px]">
            <IsometricPhone tilt="left" shellClassName={shellA}>
              <SecurityScreen t={t} />
            </IsometricPhone>
            <IsometricPhone tilt="right" shellClassName={shellB}>
              <DashboardMini />
            </IsometricPhone>
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
