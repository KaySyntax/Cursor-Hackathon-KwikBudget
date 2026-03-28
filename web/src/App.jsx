import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TranslationProvider } from './context/TranslationContext'
import { LandingPage } from './components/LandingPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { SecurityPage } from './pages/SecurityPage'
import { FAQPage } from './pages/FAQPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CookiesPage } from './pages/CookiesPage'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <TranslationProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </TranslationProvider>
    </BrowserRouter>
  )
}

export default App
