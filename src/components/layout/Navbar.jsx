import { useState, useEffect } from 'react'
import { loginLink, registerLink } from '../../lib/links'

const navLinks = [
  { label: 'Funcionalidades', href: '/#features' },
  { label: 'Comparativo', href: '/#comparativo' },
  { label: 'Planos', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-amber-400 font-bold text-xl tracking-tight">
          Previando
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={loginLink('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors"
          >
            Entrar
          </a>
          <a
            href={registerLink('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-dark-900 px-7 py-2.5 font-semibold text-sm hover:bg-amber-500 transition-colors"
          >
            Começar Grátis →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-16 right-0 w-72 bg-dark-800 shadow-lg z-50 md:hidden p-6 animate-fade-in border-l border-dark-600">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-dark-600 my-2" />
              <a
                href={loginLink('navbar-mobile')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Entrar
              </a>
              <a
                href={registerLink('navbar-mobile')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-dark-900 px-7 py-3 font-semibold text-sm text-center hover:bg-amber-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Começar Grátis →
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
