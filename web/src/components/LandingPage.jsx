import { Hero } from './Hero'
import { TrustBanner } from './TrustBanner'
import { FeaturesBento } from './FeaturesBento'
import { Testimonials } from './Testimonials'
import { SecuritySection } from './SecuritySection'
import { FAQSection } from './FAQSection'
import { FooterCTA } from './FooterCTA'

export function LandingPage() {
  return (
    <div className="min-h-svh">
      <Hero />
      <TrustBanner />
      <FeaturesBento />
      <Testimonials />
      <SecuritySection />
      <FAQSection />
      <FooterCTA />
    </div>
  )
}
