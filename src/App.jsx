import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Dores from './components/sections/Dores'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import UseCases from './components/sections/UseCases'
import ProvaSocial from './components/sections/ProvaSocial'
import Trust from './components/sections/Trust'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import TermosDeUso from './pages/TermosDeUso'
import Privacidade from './pages/Privacidade'
import Lgpd from './pages/Lgpd'

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Dores />
        <HowItWorks />
        <Features />
        <UseCases />
        <ProvaSocial />
        <Trust />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

function LegalLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-dark-900">
        <Routes>
          <Route path="/termos" element={<LegalLayout><TermosDeUso /></LegalLayout>} />
          <Route path="/privacidade" element={<LegalLayout><Privacidade /></LegalLayout>} />
          <Route path="/lgpd" element={<LegalLayout><Lgpd /></LegalLayout>} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
