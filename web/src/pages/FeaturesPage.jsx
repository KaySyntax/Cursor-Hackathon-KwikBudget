import { PageShell } from '../components/PageShell'

const features = [
  {
    icon: '🔒',
    title: 'Smart Lock System',
    description:
      'When you create a budget, your funds are locked inside KwikBudget for the period you choose. No impulse withdrawals, no "I\'ll start tomorrow." The lock is the discipline—so you don\'t have to be.',
    details: [
      'Choose any period: 7 days, 14 days, 30 days, or custom',
      'Full amount is secured on day one',
      'Funds are only released through the Daily Allowance Engine',
      'No loopholes—your budget plan stays intact',
    ],
  },
  {
    icon: '📅',
    title: 'Daily Allowance Engine',
    description:
      'KwikBudget divides your locked total by the number of days and releases exactly that amount each morning. You wake up knowing exactly what you can spend—no guesswork, no guilt.',
    details: [
      'Automatic calculation: GHS 600 over 30 days = GHS 20/day',
      'Allowance resets every morning at midnight',
      'Unspent daily balance rolls into a small savings buffer',
      'Clear dashboard showing today\'s allowance and remaining balance',
    ],
  },
  {
    icon: '💳',
    title: 'Daily Wallet',
    description:
      'Your Daily Wallet is where your spendable money lives. It only contains today\'s allowance—nothing more. This prevents the "I\'ll just dip into tomorrow\'s money" trap that destroys most budgets.',
    details: [
      'Separate from your locked funds—clear visual boundary',
      'Real-time balance updates as you spend',
      'Transaction history per day',
      'Visual indicator when you\'re approaching your daily limit',
    ],
  },
  {
    icon: '🚨',
    title: 'Emergency Unlock',
    description:
      'Life happens. When you genuinely need more than your daily allowance, Emergency Unlock gives you access—but with transparent consequences so you stay accountable.',
    details: [
      'Access additional funds beyond your daily allowance',
      'Clear warning showing how it affects your remaining days',
      'Future daily allowance automatically recalculates downward',
      'Optional cooldown period before next emergency unlock',
      'Full log of every unlock event for self-awareness',
    ],
  },
  {
    icon: '📊',
    title: 'Spending Insights & Habits',
    description:
      'Track where your money actually goes. KwikBudget shows you patterns, streaks, and trends so you can build better habits over time—not just survive the month.',
    details: [
      'Daily, weekly, and monthly spending breakdowns',
      'Streak counter: how many days you stayed within budget',
      'Category-level spending analysis',
      'Trend charts showing improvement over time',
      'Gentle nudges when spending patterns shift',
    ],
  },
  {
    icon: '🎯',
    title: 'Budget Setup & Customization',
    description:
      'Creating a budget takes 30 seconds. Enter your total amount, pick your time period, and KwikBudget handles everything else. Multiple budgets for different income sources are on the roadmap.',
    details: [
      'Simple two-step setup: amount + duration',
      'Support for GHS and other currencies',
      'Edit or extend budgets mid-cycle (with recalculation)',
      'Budget templates for common scenarios (monthly salary, weekly allowance)',
      'Coming soon: multiple simultaneous budgets',
    ],
  },
  {
    icon: '🏆',
    title: 'Gamified Discipline',
    description:
      'Staying on budget shouldn\'t feel like punishment. KwikBudget rewards consistency with streaks, badges, and milestones that make financial discipline feel like progress.',
    details: [
      'Daily streak tracking—how many days without emergency unlock',
      'Monthly discipline score',
      'Achievement badges for milestones (7-day streak, 30-day streak, etc.)',
      'Leaderboard for friends and accountability partners (coming soon)',
      'Rewards and perks for premium users who maintain streaks',
    ],
  },
]

export function FeaturesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Features That Enforce Discipline—<br className="max-[900px]:hidden" />So You Don't Have To
          </h1>
          <p className="mx-auto max-w-[42rem] font-sans text-[1.05rem] leading-[1.6] text-kwik-muted">
            KwikBudget isn't another spending tracker. It's a controlled spending system that locks
            your money and releases it gradually—turning budgeting from a suggestion into a guarantee.
          </p>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="border-b border-kwik-forest/10 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="mb-10 text-center font-sans text-[1.6rem] font-extrabold text-kwik-black">
            How KwikBudget Works in 3 Steps
          </h2>
          <div className="grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
            {[
              { step: '1', title: 'Set Your Budget', desc: 'Enter your total amount (e.g. GHS 600) and how long it needs to last (e.g. 30 days).' },
              { step: '2', title: 'Funds Get Locked', desc: 'Your money is secured inside KwikBudget. No lump-sum access—only daily releases.' },
              { step: '3', title: 'Spend Your Daily Slice', desc: 'Each morning you get exactly your daily allowance. Stay on track automatically.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-kwik-lime font-sans text-[1.3rem] font-extrabold text-kwik-black">
                  {s.step}
                </div>
                <h3 className="mb-2 font-sans text-[1.1rem] font-extrabold text-kwik-black">{s.title}</h3>
                <p className="mx-auto max-w-[28ch] font-sans text-[0.92rem] leading-[1.5] text-[#555]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12">
            {features.map((f, i) => (
              <article
                key={f.title}
                className={`grid items-center gap-10 rounded-[24px] border-2 border-kwik-forest/8 bg-white p-8 max-[900px]:grid-cols-1 ${
                  i % 2 === 0 ? 'grid-cols-[1.2fr_1fr]' : 'grid-cols-[1fr_1.2fr]'
                }`}
              >
                <div className={i % 2 === 1 ? 'max-[900px]:order-1 order-2' : ''}>
                  <div className="mb-4 text-[2.5rem]">{f.icon}</div>
                  <h3 className="mb-3 font-sans text-[1.4rem] font-extrabold text-kwik-black">{f.title}</h3>
                  <p className="mb-5 font-sans text-[0.95rem] leading-[1.6] text-[#444]">{f.description}</p>
                </div>
                <div className={`rounded-[16px] bg-kwik-forest/[0.03] p-6 ${i % 2 === 1 ? 'max-[900px]:order-2 order-1' : ''}`}>
                  <h4 className="mb-4 font-sans text-[0.85rem] font-extrabold uppercase tracking-wider text-kwik-forest">
                    Key Details
                  </h4>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {f.details.map((d) => (
                      <li key={d} className="flex gap-3 font-sans text-[0.92rem] leading-[1.5] text-[#444]">
                        <span className="mt-0.5 shrink-0 text-kwik-lime">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kwik-forest py-16 text-center text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 font-sans text-[1.8rem] font-extrabold text-white">
            Ready to Take Control?
          </h2>
          <p className="mx-auto mb-8 max-w-[32rem] font-sans text-[1rem] text-kwik-muted">
            Stop surviving the month. Start owning each day with KwikBudget.
          </p>
          <a
            href="/"
            className="inline-flex rounded-full bg-kwik-lime px-8 py-4 font-sans text-[1rem] font-bold text-kwik-black no-underline hover:bg-kwik-lime-hover"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </PageShell>
  )
}
