import { PageShell } from '../components/PageShell'

export function TermsPage() {
  return (
    <PageShell>
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-[42rem] font-sans text-[1.05rem] leading-[1.6] text-kwik-muted">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="flex flex-col gap-10 font-sans text-[0.95rem] leading-[1.7] text-[#333]">

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">1. Acceptance of Terms</h2>
              <p className="m-0">
                By accessing or using KwikBudget's mobile application, website, and related services (the "Service"),
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not
                use the Service. We reserve the right to modify these Terms at any time—we'll notify you of material
                changes at least 14 days in advance.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">2. Eligibility</h2>
              <p className="m-0">
                You must be at least 16 years old to use KwikBudget. By creating an account, you represent that you
                meet this age requirement and that the information you provide is accurate and complete. If you are
                using the Service on behalf of an organization, you represent that you have authority to bind that
                organization to these Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">3. Account Registration & Security</h2>
              <ul className="ml-5 flex flex-col gap-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must enable two-factor authentication if prompted for high-value operations</li>
                <li>You are responsible for all activity that occurs under your account</li>
                <li>Notify us immediately if you suspect unauthorized access to your account</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">4. The Service</h2>
              <h3 className="mb-2 font-sans text-[1.05rem] font-bold text-kwik-black">4.1 What KwikBudget Does</h3>
              <p className="mb-4">
                KwikBudget provides a controlled spending platform that allows you to lock funds for a set period
                and receive a fixed daily allowance. The Service includes budget creation, daily wallet management,
                Emergency Unlock, and spending insights.
              </p>

              <h3 className="mb-2 font-sans text-[1.05rem] font-bold text-kwik-black">4.2 What KwikBudget Is Not</h3>
              <p className="mb-4">
                KwikBudget is <strong>not</strong> a bank, investment advisor, or licensed financial institution. We
                do not provide financial advice, offer interest on stored funds, or guarantee returns. The Service is
                a budgeting tool designed to help you manage your spending discipline.
              </p>

              <h3 className="mb-2 font-sans text-[1.05rem] font-bold text-kwik-black">4.3 Smart Lock & Daily Allowance</h3>
              <p className="m-0">
                When you create a budget, the specified amount is locked for the chosen period. The Daily Allowance
                Engine releases a calculated portion each day. You acknowledge that locked funds are not accessible
                in full until the budget period ends—this is the core feature, not a limitation. Emergency Unlock
                provides controlled early access with clearly communicated consequences (reduced future daily
                allowance, cooldown periods).
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">5. Fees & Payments</h2>
              <ul className="ml-5 flex flex-col gap-2">
                <li>KwikBudget offers a free tier with core features (budget creation, smart lock, daily wallet, Emergency Unlock)</li>
                <li>Premium features (advanced analytics, multiple budgets, gamified rewards) may require a paid subscription</li>
                <li>Certain transaction types (e.g., specific withdrawal methods) may carry small fees, always disclosed before confirmation</li>
                <li>All prices are displayed in your local currency and include applicable taxes unless stated otherwise</li>
                <li>We reserve the right to modify pricing with 30 days' notice to existing subscribers</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">6. User Responsibilities</h2>
              <p className="mb-3">By using the Service, you agree to:</p>
              <ul className="ml-5 flex flex-col gap-2">
                <li>Provide accurate and truthful information</li>
                <li>Not use the Service for any illegal or unauthorized purpose</li>
                <li>Not attempt to circumvent the Smart Lock system through exploits, reverse engineering, or unauthorized access</li>
                <li>Not use automated tools (bots, scrapers) to access the Service without our written permission</li>
                <li>Not interfere with or disrupt the Service or its infrastructure</li>
                <li>Comply with all applicable local, national, and international laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">7. Intellectual Property</h2>
              <p className="m-0">
                The KwikBudget name, logo, design, code, and content are owned by KwikBudget and protected by
                intellectual property laws. You may not copy, modify, distribute, or create derivative works from
                our materials without written permission. Your budget data and personal information remain yours—we
                claim no ownership over user-generated content.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">8. Limitation of Liability</h2>
              <p className="m-0">
                To the maximum extent permitted by law, KwikBudget shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of the Service. This includes but
                is not limited to loss of profits, data, or goodwill. Our total liability for any claim arising from
                the Service shall not exceed the amount you paid to us in the 12 months preceding the claim. The
                Service is provided "as is" and "as available" without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">9. Termination</h2>
              <ul className="ml-5 flex flex-col gap-2">
                <li>You may close your account at any time through the app or by contacting support</li>
                <li>Upon account closure, any active budget will be unlocked and remaining funds released according to our standard procedure</li>
                <li>We may suspend or terminate your account if you violate these Terms, with notice except in cases of fraud or serious breach</li>
                <li>Provisions that by their nature should survive termination (limitation of liability, intellectual property, dispute resolution) will survive</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">10. Dispute Resolution</h2>
              <p className="m-0">
                Any disputes arising from these Terms or your use of the Service shall first be addressed through
                good-faith negotiation. If unresolved within 30 days, disputes will be submitted to binding
                arbitration under the rules of a mutually agreed arbitration body. These Terms are governed by
                the laws of Ghana, without regard to conflict-of-law principles. Nothing in this section prevents
                you from filing a complaint with a relevant consumer protection authority.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">11. Contact</h2>
              <p className="m-0">
                For questions about these Terms, contact us at:<br />
                <strong>legal@kwikbudget.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
