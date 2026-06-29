import { useState } from 'react'

const navLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Blog', href: '#' },
  { label: 'Sobre', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] h-16">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="text-blue-primary font-bold text-xl tracking-tight">
          Previando
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-blue-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.previando.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-primary text-sm font-medium transition-colors"
          >
            Entrar
          </a>
          <a
            href="https://app.previando.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-accent text-white px-7 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D97008] transition-colors"
          >
            Ver Demonstração →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-900 p-2"
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
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-16 right-0 w-72 bg-white shadow-lg z-50 md:hidden rounded-bl-2xl p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-primary text-sm font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              <a
                href="https://app.previando.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-primary text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Entrar
              </a>
              <a
                href="https://app.previando.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-accent text-white px-7 py-3 rounded-lg font-semibold text-sm text-center hover:bg-[#D97008] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Ver Demonstração →
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
