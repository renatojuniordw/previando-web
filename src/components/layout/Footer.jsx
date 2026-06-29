const footerColumns = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#features' },
      { label: 'Planos', href: '#pricing' },
      { label: 'Blog', href: '#' },
      { label: 'Central de Ajuda', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de Uso', href: '#/termos' },
      { label: 'Política de Privacidade', href: '#/privacidade' },
      { label: 'LGPD', href: '#/lgpd' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'contato@previando.com.br', href: 'mailto:contato@previando.com.br' },
      { label: '@previando', href: 'https://instagram.com/previando' },
      { label: 'app.previando.com.br', href: 'https://app.previando.com.br' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white border-t border-dark-600">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <a href="#hero" className="text-amber-400 font-bold text-xl tracking-tight">
              Previando
            </a>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Previdência inteligente para advogados.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="https://instagram.com/previando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors block"
              >
                Instagram: @previando
              </a>
              <p className="text-gray-400 text-xs mt-4">Um produto Unificando</p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-gray-900 font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <hr className="border-dark-600 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Previando. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs">
            Previando é um produto Unificando |{' '}
            <a href="https://unificando.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              unificando.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
