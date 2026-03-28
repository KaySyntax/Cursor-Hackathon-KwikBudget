import { PageShell } from '../components/PageShell'

export function PrivacyPage() {
  return (
    <PageShell>
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-[42rem] font-sans text-[1.05rem] leading-[1.6] text-kwik-muted">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="prose mx-auto max-w-[800px] px-6">
          <div className="flex flex-col gap-10 font-sans text-[0.95rem] leading-[1.7] text-[#333]">

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">1. Introduction</h2>
              <p className="m-0">
                KwikBudget ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your personal information when you use our
                mobile application, website, and related services (collectively, the "Service"). By using KwikBudget,
                you agree to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">2. Information We Collect</h2>
              <h3 className="mb-2 font-sans text-[1.05rem] font-bold text-kwik-black">2.1 Information You Provide</h3>
              <ul className="mb-4 ml-5 flex flex-col gap-2">
                <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
                <li><strong>Financial Information:</strong> Budget amounts, time periods, daily allowance settings, and spending categories you create within the app</li>
                <li><strong>Identity Verification:</strong> Government-issued ID or other verification documents if required for certain features or regulatory compliance</li>
                <li><strong>Communication Data:</strong> Messages you send to our support team or feedback you provide</li>
              </ul>

              <h3 className="mb-2 font-sans text-[1.05rem] font-bold text-kwik-black">2.2 Information Collected Automatically</h3>
              <ul className="ml-5 flex flex-col gap-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information</li>
                <li><strong>Usage Data:</strong> How you interact with the Service—features used, time spent, buttons tapped, and screens viewed</li>
                <li><strong>Location Data:</strong> City-level location for session security (we do not track precise GPS location)</li>
                <li><strong>Log Data:</strong> IP address, browser type, access times, and referring URLs when you visit our website</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">3. How We Use Your Information</h2>
              <ul className="ml-5 flex flex-col gap-2">
                <li><strong>Provide the Service:</strong> Calculate daily allowances, manage locked funds, process Emergency Unlocks, and display spending insights</li>
                <li><strong>Security:</strong> Detect unauthorized access, verify device sessions, and protect your account from fraud</li>
                <li><strong>Improve the Product:</strong> Analyze usage patterns (in aggregate) to improve features, fix bugs, and plan new capabilities</li>
                <li><strong>Communication:</strong> Send transactional notifications (daily allowance released, Emergency Unlock confirmed), and—with your consent—product updates and tips</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements, respond to lawful requests, and enforce our Terms of Service</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">4. How We Share Your Information</h2>
              <p className="mb-3">We do <strong>not</strong> sell your personal information. We may share data with:</p>
              <ul className="ml-5 flex flex-col gap-2">
                <li><strong>Service Providers:</strong> Cloud hosting, payment processing, and analytics partners who process data on our behalf under strict confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or government request</li>
                <li><strong>Safety:</strong> To protect the rights, property, or safety of KwikBudget, our users, or others</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you would be notified of any such change)</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">5. Data Security</h2>
              <p className="m-0">
                We use industry-standard security measures including TLS 1.3 encryption in transit, AES-256 encryption
                at rest, two-factor authentication, biometric login support, and regular security audits. Locked funds
                are held in segregated storage with no manual admin override capability. While no system is 100% secure,
                we are committed to protecting your data and will notify you promptly if a breach occurs.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">6. Data Retention</h2>
              <p className="m-0">
                We retain your personal information for as long as your account is active or as needed to provide the
                Service. Budget and transaction history is kept for a minimum of 12 months after a budget period ends
                to support your spending insights and audit trail. If you delete your account, we will remove your
                personal information within 30 days, except where retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">7. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="ml-5 flex flex-col gap-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities, including direct marketing</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <strong>privacy@kwikbudget.com</strong>.</p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">8. Children's Privacy</h2>
              <p className="m-0">
                KwikBudget is not intended for children under the age of 16. We do not knowingly collect personal
                information from children. If you believe a child has provided us with personal information, please
                contact us and we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">9. International Data Transfers</h2>
              <p className="m-0">
                Your information may be processed in countries other than your country of residence. We ensure
                appropriate safeguards are in place, including standard contractual clauses and encryption, to
                protect your data in accordance with this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">10. Changes to This Policy</h2>
              <p className="m-0">
                We may update this Privacy Policy from time to time. We will notify you of material changes
                via in-app notification or email at least 14 days before they take effect. Your continued use
                of the Service after the effective date constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">11. Contact Us</h2>
              <p className="m-0">
                If you have questions about this Privacy Policy or our data practices, contact us at:<br />
                <strong>privacy@kwikbudget.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
