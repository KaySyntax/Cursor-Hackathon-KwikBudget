import { IsometricPhone } from './IsometricPhone'

function IconBolt() {
  return (
    <span className="flex size-[52px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function IconGlobe() {
  return (
    <span className="flex size-[46px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </span>
  )
}

function IconCrypto() {
  return (
    <span className="flex size-[46px] items-center justify-center rounded-full border-2 border-kwik-lime/55 bg-kwik-lime/20 text-kwik-forest">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v18M8 7h6a4 4 0 0 1 0 8H8M8 7v10M14 15h2a4 4 0 0 0 0-8h-2"
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
      <div className="mb-2 font-sans text-[0.65rem] text-kwik-muted">Weekly spend</div>
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
        <h2 className="mx-auto mb-10 max-w-[20ch] text-center font-sans text-[clamp(1.65rem,3vw,2.35rem)] font-extrabold tracking-tight text-kwik-black">
          Manage Your Money, All in One Place.
        </h2>
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          <article className="col-span-2 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6 max-[900px]:col-span-1">
            <div className="flex min-h-[200px] items-stretch gap-6 max-[900px]:min-h-0 max-[900px]:flex-col">
              <div className="flex w-[38%] flex-col justify-center max-[900px]:w-full">
                <h3 className="mb-2 font-sans text-[1.1rem] font-extrabold text-kwik-black">
                  Real-Time Analytics
                </h3>
                <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
                  Live dashboards that surface trends before they become surprises.
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
            <IconBolt />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Instant Transfers
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Send money domestically or cross-border with clear fees and instant
              confirmations.
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconWallet />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Budgeting Tools
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Envelope-style budgets, alerts, and auto-categorization built in.
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconGlobe />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Global Payments
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Pay and get paid in the currencies your life actually uses.
            </p>
          </article>

          <article className="flex flex-col gap-3.5 rounded-[20px] border-2 border-kwik-forest/12 bg-white p-6">
            <IconCrypto />
            <h3 className="m-0 font-sans text-[1.1rem] font-extrabold text-kwik-black">
              Crypto & Investment
            </h3>
            <p className="m-0 font-sans text-[0.92rem] leading-normal text-[#444]">
              Track tokens and traditional holdings alongside everyday cash flow.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
