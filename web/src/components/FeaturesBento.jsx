import { IsometricPhone } from './IsometricPhone'

function IconLock() {
  return (
    <span className="flex size-[52px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="5"
          y="11"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 11V8a4 4 0 0 1 8 0v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

function IconBolt() {
  return (
    <span className="flex size-[46px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function IconWallet() {
  return (
    <span className="flex size-[46px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="2"
          y="6"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M16 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function IconInsights() {
  return (
    <span className="flex size-[46px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19V5M12 19V9M20 19v-6M8 21v-2M16 21v-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

function AnalyticsPhoneScreen() {
  return (
    <div className="flex h-full flex-col p-2.5">
      <div className="mb-2 font-sans text-[0.65rem] text-kwik-muted">Daily allowance</div>
      <div className="flex flex-1 items-end gap-1">
        {[55, 72, 48, 90, 66, 78].map((h, i) => (
          <span
            key={i}
            className="min-h-[18%] flex-1 rounded-t bg-gradient-to-t from-kwik-lime/25 to-kwik-lime"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

const bentoShell =
  '[transform:perspective(1200px)_rotateX(10deg)_rotateZ(-6deg)_scale(0.95)]'

export function FeaturesBento() {
  return (
    <section className="bg-white py-16 pb-[72px]" id="features">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mx-auto mb-4 max-w-[22ch] text-center font-sans text-[clamp(1.65rem,3vw,2.35rem)] font-extrabold tracking-tight text-kwik-black">
          Not just tracking—real spending control.
        </h2>
        <p className="mx-auto mb-10 max-w-[40rem] text-center font-sans text-[0.95rem] leading-relaxed text-[#444]">
          Set your total and time period, let KwikBudget lock the rest, and live on a daily wallet
          that resets every morning. Simple on the surface, strict where it counts.
        </p>
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          <article className="col-span-2 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6 max-[900px]:col-span-1">
            <div className="flex min-h-[200px] items-stretch gap-6 max-[900px]:min-h-0 max-[900px]:flex-col">
              <div className="flex w-[38%] flex-col justify-center max-[900px]:w-full">
                <h3 className="mb-2 font-sans text-[1.1rem] font-extrabold text-kwik-black">
                  Daily Wallet
                </h3>
                <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
                  You can only spend what’s unlocked for that day—so you don’t overspend early and
                  scrape by later. Your allowance is automatic; your excuses aren’t.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <IsometricPhone tilt="left" shellClassName={bentoShell}>
                  <AnalyticsPhoneScreen />
                </IsometricPhone>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-4 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6 max-[900px]:col-span-1">
            <IconLock />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Smart Lock
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Money stays locked in the app for your chosen period. The daily engine releases funds
              gradually—no more “I’ll fix it next week.”
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconWallet />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Budget setup
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Enter your total (e.g. GHS&nbsp;600) and how long it needs to last (e.g. 30 days).
              KwikBudget handles the math and the lock.
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconBolt />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Emergency unlock
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Real life happens. Tap extra funds when you must—but expect consequences like a lower
              future daily allowance or a cooldown so shortcuts don’t become habits.
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconInsights />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Insights & rewards
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Premium adds deeper analytics, multiple budgets, and gamified streaks—so staying
              disciplined feels motivating, not punishing.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
