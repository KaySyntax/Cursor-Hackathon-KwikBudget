import { Logo } from './Logo'
import { IsometricPhone } from './IsometricPhone'

function FooterPhoneScreen() {
  return (
    <div className="box-border h-full p-3.5">
      <div className="mb-4 h-2 w-[40%] rounded-full bg-white/20" />
      <div className="mb-1 font-sans text-[1.05rem] font-extrabold text-white">GHS 600</div>
      <div className="mb-4 text-[0.65rem] text-kwik-muted">Locked · 24 days left</div>
      <div className="flex gap-2">
        <span className="h-12 flex-1 rounded-[10px] border border-kwik-lime/35 bg-kwik-lime/20" />
        <span className="h-12 flex-1 rounded-[10px] border border-kwik-lime/35 bg-kwik-lime/20" />
        <span className="h-12 flex-1 rounded-[10px] border border-kwik-lime/35 bg-kwik-lime/20" />
      </div>
    </div>
  )
}

const footerShell = '[transform:perspective(1200px)_rotateX(16deg)_rotateZ(10deg)]'

export function FooterCTA() {
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
              KwikBudget locks your money for the month and releases it as a daily allowance—so you
              build real discipline, dodge end-of-month panic, and still have emergency unlock when
              life refuses to cooperate.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-6" aria-label="Quick links">
            <div>
              <h3 className="m-0 mb-3.5 font-sans text-[0.85rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                Quick Links
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                <li>
                  <a
                    href="#features"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="m-0 mb-3.5 font-sans text-[0.85rem] font-extrabold uppercase tracking-wider text-kwik-lime">
                Legal
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                <li>
                  <a
                    href="#"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-sans text-[0.92rem] text-kwik-muted no-underline transition-colors hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="relative min-h-[200px] overflow-hidden rounded-[20px] bg-kwik-lime px-[22px] pb-[100px] pt-6 text-kwik-black max-[960px]:pb-[88px]">
            <p className="relative z-10 m-0 mb-4 max-w-[18ch] font-sans text-[1.15rem] font-extrabold leading-tight">
              Stop surviving the month. Start owning each day.
            </p>
            <a
              href="#top"
              className="relative z-10 inline-flex rounded-full bg-kwik-black px-[22px] py-3 font-sans text-[0.9rem] font-extrabold text-kwik-lime no-underline transition-opacity active:scale-[0.98] hover:opacity-90"
            >
              Get Started
            </a>
            <div className="absolute -bottom-10 -right-3 z-0 -rotate-12">
              <IsometricPhone
                tilt="right"
                compact
                shellClassName={footerShell}
              >
                <FooterPhoneScreen />
              </IsometricPhone>
            </div>
          </div>
        </div>
        <p className="mt-7 text-center font-sans text-[0.8rem] text-kwik-muted">
          © {new Date().getFullYear()} KwikBudget. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
