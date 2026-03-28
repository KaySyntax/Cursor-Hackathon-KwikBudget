import { TranslationProvider } from './context/TranslationContext'
import { LandingPage } from './components/LandingPage'

function App() {
  return (
    <TranslationProvider>
      <LandingPage />
    </TranslationProvider>
  )
}

export default App
