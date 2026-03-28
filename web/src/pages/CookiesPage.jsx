import { PageShell } from '../components/PageShell'

export function CookiesPage() {
  return (
    <PageShell>
      <section className="bg-kwik-forest py-20 text-kwik-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
            Cookie Policy
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
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">1. What Are Cookies?</h2>
              <p className="m-0">
                Cookies are small text files stored on your device when you visit a website. They help the
                website remember your preferences, keep you signed in, and understand how you use the site.
                KwikBudget uses cookies and similar technologies (such as local storage) to provide, protect,
                and improve our Service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">2. Types of Cookies We Use</h2>

              <div className="mb-6 overflow-hidden rounded-[14px] border-2 border-kwik-forest/10">
                <div className="bg-kwik-forest px-5 py-3">
                  <h3 className="m-0 font-sans text-[1rem] font-bold text-white">Essential Cookies</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="mb-3"><strong>Required:</strong> Yes — the Service cannot function without these.</p>
                  <ul className="ml-5 flex flex-col gap-1.5">
                    <li><strong>Authentication cookies:</strong> Keep you signed in and verify your identity across pages</li>
                    <li><strong>Session cookies:</strong> Maintain your active session and prevent CSRF attacks</li>
                    <li><strong>Security cookies:</strong> Detect suspicious login attempts and unauthorized access</li>
                    <li><strong>Language preference:</strong> Remember your selected language for translation</li>
                  </ul>
                  <p className="mt-3 text-[0.85rem] text-[#666]">Duration: Session-based or up to 30 days</p>
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-[14px] border-2 border-kwik-forest/10">
                <div className="bg-kwik-forest-mid px-5 py-3">
                  <h3 className="m-0 font-sans text-[1rem] font-bold text-white">Functional Cookies</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="mb-3"><strong>Required:</strong> No — but disabling them may reduce your experience.</p>
                  <ul className="ml-5 flex flex-col gap-1.5">
                    <li><strong>UI preferences:</strong> Remember your dashboard layout, theme, and display settings</li>
                    <li><strong>Feature state:</strong> Remember which FAQ sections you've expanded, tour progress, etc.</li>
                    <li><strong>Translation cache:</strong> Store translated page content locally so language switches are instant on return visits</li>
                  </ul>
                  <p className="mt-3 text-[0.85rem] text-[#666]">Duration: Up to 12 months</p>
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-[14px] border-2 border-kwik-forest/10">
                <div className="bg-kwik-forest-light px-5 py-3">
                  <h3 className="m-0 font-sans text-[1rem] font-bold text-white">Analytics Cookies</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="mb-3"><strong>Required:</strong> No — these help us understand how the Service is used.</p>
                  <ul className="ml-5 flex flex-col gap-1.5">
                    <li><strong>Usage analytics:</strong> Track page views, feature usage, and navigation patterns (aggregated, not individual)</li>
                    <li><strong>Performance monitoring:</strong> Measure page load times and identify bottlenecks</li>
                    <li><strong>Error tracking:</strong> Capture JavaScript errors and failed API calls to fix bugs faster</li>
                  </ul>
                  <p className="mt-3 text-[0.85rem] text-[#666]">Duration: Up to 12 months</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[14px] border-2 border-kwik-forest/10">
                <div className="bg-[#444] px-5 py-3">
                  <h3 className="m-0 font-sans text-[1rem] font-bold text-white">Marketing Cookies</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="mb-3"><strong>Required:</strong> No — only used if you've opted in.</p>
                  <p className="m-0">
                    We currently do <strong>not</strong> use marketing or advertising cookies. If this changes in
                    the future, we will update this policy and obtain your explicit consent before placing any
                    marketing cookies on your device.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">3. Third-Party Cookies</h2>
              <p className="m-0">
                Some cookies may be set by third-party services we use (such as analytics providers or
                authentication services). These third parties have their own privacy policies governing how
                they use cookies. We only work with partners who meet our data protection standards. Current
                third-party services include:
              </p>
              <ul className="ml-5 mt-3 flex flex-col gap-2">
                <li><strong>GhanaNLP Translation API:</strong> No cookies placed—API calls only, no client-side tracking</li>
                <li><strong>Hosting Provider:</strong> May set security-related cookies for DDoS protection and CDN optimization</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">4. Managing Your Cookie Preferences</h2>
              <p className="mb-3">You have several options for controlling cookies:</p>
              <ul className="ml-5 flex flex-col gap-2">
                <li><strong>Browser Settings:</strong> Most browsers let you block or delete cookies through their settings menu. Note that blocking essential cookies will prevent you from using KwikBudget.</li>
                <li><strong>In-App Controls:</strong> When available, use the cookie preference center in our app to toggle non-essential cookie categories.</li>
                <li><strong>Opt-Out Links:</strong> For analytics providers, you can use their individual opt-out mechanisms (links will be provided here when applicable).</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">5. Local Storage & Similar Technologies</h2>
              <p className="m-0">
                In addition to cookies, KwikBudget uses browser local storage to cache translation data (so language
                switching is fast on return visits) and to store UI preferences. Local storage behaves similarly to
                cookies but can hold more data and doesn't expire automatically. You can clear local storage through
                your browser's developer tools or settings.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">6. Changes to This Policy</h2>
              <p className="m-0">
                We may update this Cookie Policy to reflect changes in our practices or for legal, regulatory,
                or operational reasons. Material changes will be communicated via in-app notification or website
                banner at least 14 days before they take effect.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-sans text-[1.3rem] font-extrabold text-kwik-black">7. Contact Us</h2>
              <p className="m-0">
                If you have questions about our use of cookies, contact us at:<br />
                <strong>privacy@kwikbudget.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
