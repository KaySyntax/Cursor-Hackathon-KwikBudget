import { PageShell } from '../components/PageShell'

const sections = [
  {
    icon: '🔐',
    title: 'Encryption Everywhere',
    items: [
      'All data encrypted in transit using TLS 1.3—the same standard banks rely on',
      'Data at rest is encrypted with AES-256, whether it\'s your balance, transaction history, or personal details',
      'API keys and sensitive tokens are stored in secure vaults, never in application code or logs',
      'End-to-end encryption for sensitive operations like Emergency Unlock and budget modifications',
    ],
  },
  {
    icon: '📱',
    title: 'Secure Authentication',
    items: [
      'Two-factor authentication (2FA) supported via SMS and authenticator apps',
      'Biometric login (fingerprint and face recognition) on supported devices',
      'Secure session management with automatic timeout after inactivity',
      'Device-level authentication—each new device requires verification before access is granted',
      'Password requirements enforced: minimum length, complexity, and breach-database checks',
    ],
  },
  {
    icon: '👁️',
    title: 'Device & Session Visibility',
    items: [
      'View every device currently signed into your account from one dashboard',
      'See the last active time, location (city-level), and device type for each session',
      'Revoke any session instantly with one tap—useful if you lose a device or spot something unusual',
      'Automatic alerts when a new device signs in for the first time',
      'Session history log so you can audit past access',
    ],
  },
  {
    icon: '🛡️',
    title: 'Fund Protection',
    items: [
      'Locked funds are held in segregated, read-only storage—no unauthorized access, no behind-the-scenes transfers',
      'The Daily Allowance Engine is the only mechanism that moves money from locked to spendable',
      'Emergency Unlock events are logged with timestamps, amounts, and consequences applied',
      'No hidden admin overrides—even the KwikBudget team cannot manually release your locked funds',
      'Every transaction has an immutable audit trail',
    ],
  },
  {
    icon: '📋',
    title: 'Transparency & Logging',
    items: [
      'Every unlock, transaction, and budget change is logged with full details',
      'You can export your complete activity history at any time',
      'No silent modifications—if your daily allowance changes (e.g. after an Emergency Unlock), you see exactly why',
      'Clear, human-readable explanations for every automated action the system takes',
      'Regular security reports summarizing account activity and any flagged events',
    ],
  },
  {
    icon: '🏢',
    title: 'Infrastructure & Compliance',
    items: [
      'Hosted on industry-leading cloud infrastructure with 99.9% uptime SLA',
      'Regular penetration testing by independent security firms',
      'SOC 2-aligned practices for data handling, access control, and incident response',
      'GDPR-aware data practices—you can request data export or deletion at any time',
      'Incident response plan with defined escalation procedures and user notification timelines',
      'Routine dependency audits to ensure no known vulnerabilities in our software supply chain',
    ],
  },
]

export function SecurityPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Security at KwikBudget
          </h1>
          <p className="mx-auto max-w-[42rem] font-sans text-[1.05rem] leading-[1.6] text-kwik-muted">
            Your budget rules only work if you trust the app holding the lock. Here's exactly how we
            protect your money, your data, and your control—with no hand-waving.
          </p>
        </div>
      </section>

      {/* Security Principle */}
      <section className="border-b border-kwik-forest/10 bg-white py-14">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="mb-4 font-sans text-[1.4rem] font-extrabold text-kwik-black">
            Our Security Principle
          </h2>
          <p className="font-sans text-[1.05rem] leading-[1.7] text-[#444]">
            KwikBudget is designed so that <strong>you can see what's protected, what's spendable
            today, and who's signed in</strong>—without giving up control when life gets messy. We
            don't hide behind vague "bank-grade security" claims. Below is exactly what we do and how.
          </p>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <article
                key={s.title}
                className="rounded-[20px] border-2 border-kwik-forest/8 bg-white p-8"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-[2rem]">{s.icon}</span>
                  <h3 className="m-0 font-sans text-[1.3rem] font-extrabold text-kwik-black">{s.title}</h3>
                </div>
                <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 font-sans text-[0.95rem] leading-[1.6] text-[#444]">
                      <span className="mt-0.5 shrink-0 font-bold text-kwik-lime">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="border-t border-kwik-forest/10 bg-kwik-forest/[0.03] py-14">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="mb-4 font-sans text-[1.4rem] font-extrabold text-kwik-black">
            Found a Vulnerability?
          </h2>
          <p className="mb-6 font-sans text-[1rem] leading-[1.6] text-[#444]">
            We take responsible disclosure seriously. If you've discovered a security issue,
            please contact us at <strong>security@kwikbudget.com</strong>. We'll acknowledge your
            report within 48 hours and work with you to resolve it.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
