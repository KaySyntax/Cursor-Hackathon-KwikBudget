import { useState } from 'react'
import { cn } from '../lib/cn'

const items = [
  {
    q: 'Is my data safe?',
    a:
      'Yes. We use industry-standard encryption, protect sign-in on your phone, and keep a clear record of sessions and sensitive actions—so your money rules aren’t easy to bypass or hide.',
  },
  {
    q: 'How is KwikBudget different from other budgeting apps?',
    a:
      'Most apps only track what you spent. KwikBudget actively limits what you can spend by locking your funds and releasing a fixed daily allowance. Discipline is enforced by the product—not by willpower alone.',
  },
  {
    q: 'How does the daily allowance work?',
    a:
      'You set a total amount and a time period (for example, GHS 600 over 30 days). The app locks the full amount, calculates your daily slice, and only that portion is available to spend each day—helping you pace through the whole period.',
  },
  {
    q: 'What happens if I use Emergency Unlock?',
    a:
      'You can access extra money when you truly need it, but KwikBudget balances flexibility with accountability: expect a smaller future daily allowance, a cooldown before the next unlock, or similar guardrails—so emergencies don’t erase your plan.',
  },
  {
    q: 'What does pricing look like?',
    a:
      'We plan a solid free experience for individuals, with premium options for advanced analytics, multiple budgets, and gamified rewards. Some flows may include small fees (for example on certain withdrawals)—always shown upfront.',
  },
]

function MagnifyingIllustration() {
  return (
    <div className="[perspective:800px]" aria-hidden="true">
      <svg
        className="mx-auto block h-auto w-full max-w-[280px] [transform:rotateX(8deg)_rotateY(-12deg)] drop-shadow-[12px_20px_24px_rgba(10,31,20,0.15)] max-[900px]:mx-auto"
        viewBox="0 0 200 180"
        fill="none"
      >
        <defs>
          <linearGradient id="kbFaqLens" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8ff4a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#123524" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <ellipse
          cx="90"
          cy="88"
          rx="52"
          ry="52"
          stroke="url(#kbFaqLens)"
          strokeWidth="10"
          transform="rotate(-18 90 88)"
        />
        <path
          d="M128 118 L168 158"
          stroke="#0a1f14"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <rect
          x="38"
          y="42"
          width="86"
          height="102"
          rx="8"
          fill="#fff"
          stroke="rgba(10,31,20,0.2)"
          strokeWidth="2"
          transform="rotate(-18 80 92)"
        />
        <text
          x="62"
          y="98"
          fill="#0a1f14"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="22"
          fontWeight="800"
          transform="rotate(-18 62 98)"
        >
          FAQ
        </text>
        <path
          d="M48 78h56"
          stroke="rgba(10,31,20,0.15)"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(-18 76 78)"
        />
        <path
          d="M48 108h40"
          stroke="rgba(10,31,20,0.15)"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(-18 68 108)"
        />
      </svg>
    </div>
  )
}

export function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section
      className="border-t border-kwik-forest/10 bg-white py-16 pb-[88px]"
      id="faq"
      aria-labelledby="kb-faq-heading"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1.15fr] items-start gap-12 px-6 max-[900px]:grid-cols-1">
        <div className="max-[900px]:text-center">
          <h2
            className="mb-6 font-sans text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold leading-tight tracking-tight text-kwik-black"
            id="kb-faq-heading"
          >
            Frequently Asked Question
          </h2>
          <MagnifyingIllustration />
        </div>
        <div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <li
                  key={item.q}
                  className="overflow-hidden rounded-[14px] border-2 border-kwik-forest/12 bg-white"
                >
                  <button
                    type="button"
                    className={cn(
                      'flex w-full cursor-pointer items-center justify-between gap-4 border-none px-[18px] py-4 text-left font-sans text-base font-bold transition-colors',
                      isOpen
                        ? 'bg-kwik-forest text-white hover:bg-kwik-forest-mid'
                        : 'bg-white text-kwik-black hover:bg-kwik-lime/10',
                    )}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={cn(
                        'shrink-0 text-[0.65rem] transition-transform',
                        isOpen ? 'rotate-180 text-kwik-lime' : 'text-kwik-forest',
                      )}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="-mt-1 bg-kwik-forest px-[18px] pb-[18px] font-sans text-[0.95rem] leading-[1.55] text-white">
                      <p className="m-0">{item.a}</p>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
