import { useState } from 'react'
import { cn } from '../lib/cn'
import { PageShell } from '../components/PageShell'

const categories = [
  {
    name: 'Getting Started',
    items: [
      {
        q: 'What is KwikBudget?',
        a: 'KwikBudget is a smart budgeting platform that locks your money and releases it as a fixed daily allowance. Instead of relying on willpower to stick to a budget, KwikBudget enforces discipline automatically—ensuring you don\'t overspend early and struggle later.',
      },
      {
        q: 'Who is KwikBudget for?',
        a: 'KwikBudget is built for university students, young professionals, and anyone living on a fixed income or allowance who wants to stop running out of money before the month ends. If you\'ve ever blown your budget in the first week, KwikBudget is for you.',
      },
      {
        q: 'How do I create a budget?',
        a: 'It takes 30 seconds. Open the app, enter your total amount (e.g. GHS 600), choose your time period (e.g. 30 days), and tap "Lock Budget." KwikBudget calculates your daily allowance automatically and locks the full amount.',
      },
      {
        q: 'Is KwikBudget available on both iOS and Android?',
        a: 'We\'re currently building the mobile app for both platforms. The web landing page is live now, and the mobile app will be available soon. Join the waitlist to be notified when it launches.',
      },
      {
        q: 'Do I need a bank account to use KwikBudget?',
        a: 'Initial versions will work with mobile money and direct deposits. Bank account linking is on our roadmap and availability will vary by region and institution.',
      },
    ],
  },
  {
    name: 'Daily Allowance & Wallet',
    items: [
      {
        q: 'How does the daily allowance work?',
        a: 'You set a total amount and a time period (for example, GHS 600 over 30 days). The app locks the full amount, calculates your daily slice (GHS 20/day in this case), and only that portion is available to spend each day. Your allowance resets every morning at midnight.',
      },
      {
        q: 'What happens to money I don\'t spend today?',
        a: 'Unspent daily allowance rolls into a small savings buffer. This gives you a cushion for slightly bigger purchases without triggering an Emergency Unlock. The exact rollover policy is designed to reward discipline without breaking the daily spending boundary.',
      },
      {
        q: 'Can I change my daily allowance amount?',
        a: 'Your daily allowance is automatically calculated from your total budget and time period. If you need to adjust, you can modify your budget—which will recalculate the daily amount for the remaining period. The system always shows you exactly how changes affect your plan.',
      },
      {
        q: 'What if my daily allowance isn\'t enough for something I need?',
        a: 'That\'s what Emergency Unlock is for. You can access additional funds when you genuinely need them—but with transparent consequences (reduced future daily allowance, cooldown periods) so that emergencies don\'t become habits.',
      },
    ],
  },
  {
    name: 'Emergency Unlock',
    items: [
      {
        q: 'What happens if I use Emergency Unlock?',
        a: 'You can access extra money when you truly need it, but KwikBudget balances flexibility with accountability. After an Emergency Unlock, your future daily allowance is automatically recalculated downward to compensate. There may also be a cooldown before the next unlock. Every unlock is logged so you maintain full self-awareness.',
      },
      {
        q: 'Is there a limit to how many times I can Emergency Unlock?',
        a: 'There are built-in guardrails to prevent Emergency Unlock from becoming a loophole. The exact limits (frequency caps, cooldown periods, maximum percentage of remaining funds) are designed to keep the system useful while maintaining its core promise of discipline.',
      },
      {
        q: 'Can I turn off Emergency Unlock entirely?',
        a: 'We\'re considering a "Strict Mode" that disables Emergency Unlock for users who want maximum discipline. This is on our feature roadmap—let us know if it\'s something you\'d use.',
      },
    ],
  },
  {
    name: 'Security & Privacy',
    items: [
      {
        q: 'Is my data safe?',
        a: 'Yes. We use industry-standard encryption (TLS 1.3 in transit, AES-256 at rest), support 2FA and biometric login, and keep a clear record of sessions and sensitive actions. Your money rules aren\'t easy to bypass or hide—even from us.',
      },
      {
        q: 'Can KwikBudget staff access my locked funds?',
        a: 'No. Locked funds sit in segregated, read-only storage. There are no admin overrides that allow manual release. The only mechanism that moves money from locked to spendable is the Daily Allowance Engine.',
      },
      {
        q: 'What happens if I lose my phone?',
        a: 'You can sign in from a new device (with 2FA verification), view all active sessions, and revoke the lost device\'s access instantly. Your funds and budget remain intact and secure.',
      },
    ],
  },
  {
    name: 'Pricing & Plans',
    items: [
      {
        q: 'What does pricing look like?',
        a: 'We plan a solid free experience for individuals, with premium options for advanced analytics, multiple simultaneous budgets, and gamified rewards (streaks, badges, leaderboards). Some flows may include small fees (for example on certain withdrawal types)—always shown upfront, never hidden.',
      },
      {
        q: 'Is there a free plan?',
        a: 'Yes. The core experience—budget creation, smart lock, daily wallet, and Emergency Unlock—will be free for individual users. Premium features add depth, not gates.',
      },
      {
        q: 'Will there be transaction fees?',
        a: 'Some transaction types (such as certain withdrawal methods or currency conversions) may carry small fees. These are always displayed before you confirm—no surprise charges.',
      },
    ],
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <li className="overflow-hidden rounded-[14px] border-2 border-kwik-forest/12 bg-white">
      <button
        type="button"
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-4 border-none px-5 py-4 text-left font-sans text-[0.95rem] font-bold transition-colors',
          isOpen
            ? 'bg-kwik-forest text-white hover:bg-kwik-forest-mid'
            : 'bg-white text-kwik-black hover:bg-kwik-lime/10',
        )}
        aria-expanded={isOpen}
        onClick={onToggle}
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
      {isOpen && (
        <div className="-mt-1 bg-kwik-forest px-5 pb-5 font-sans text-[0.95rem] leading-[1.6] text-white/90">
          <p className="m-0">{item.a}</p>
        </div>
      )}
    </li>
  )
}

export function FAQPage() {
  const [openMap, setOpenMap] = useState({})

  function toggle(catIdx, itemIdx) {
    const key = `${catIdx}-${itemIdx}`
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-[42rem] font-sans text-[1.05rem] leading-[1.6] text-kwik-muted">
            Everything you need to know about KwikBudget—how it works, how your money is protected,
            and what makes it different from every other budgeting app you've tried.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="flex flex-col gap-12">
            {categories.map((cat, catIdx) => (
              <div key={cat.name}>
                <h2 className="mb-5 font-sans text-[1.3rem] font-extrabold text-kwik-black">
                  {cat.name}
                </h2>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {cat.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={item.q}
                      item={item}
                      isOpen={!!openMap[`${catIdx}-${itemIdx}`]}
                      onToggle={() => toggle(catIdx, itemIdx)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="border-t border-kwik-forest/10 bg-kwik-forest/[0.03] py-14">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="mb-4 font-sans text-[1.4rem] font-extrabold text-kwik-black">
            Still Have Questions?
          </h2>
          <p className="mb-6 font-sans text-[1rem] leading-[1.6] text-[#444]">
            We'd love to hear from you. Reach out at <strong>hello@kwikbudget.com</strong> and
            we'll get back to you within 24 hours.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
