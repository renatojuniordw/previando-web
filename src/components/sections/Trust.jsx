import Reveal from '../ui/Reveal'

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M16 14v4M16 22h.01" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 8V6a6 6 0 0112 0v2" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'Dados Criptografados',
    description: 'CPFs armazenados com criptografia. PDFs processados em nuvem segura. Nenhum dado compartilhado com terceiros.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M16 4l12 6v6c0 6.627-4.373 12.627-12 14-7.627-1.373-12-7.373-12-14V10l12-6z" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      </svg>
    ),
    title: 'LGPD e Compliance',
    description: 'Total conformidade com a Lei Geral de Proteção de Dados. Você e seus clientes protegidos pela legislação brasileira.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="16" cy="16" r="10" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M16 6v20M6 16h20" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4" />
        <circle cx="16" cy="16" r="3" fill="#F59E0B" opacity="0.2" stroke="#F59E0B" strokeWidth="1" />
      </svg>
    ),
    title: 'Servidor no Brasil',
    description: 'Dados hospedados em data centers brasileiros. Sujeitos à legislação nacional e ao sigilo profissional advogado-cliente.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
        <path d="M16 10v6l4 2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28l-4-4 4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 28l4-4-4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
    title: 'Atualização Automática',
    description: 'Novo teto, novas regras, novas modalidades — o sistema atualiza sozinho. Cálculos antigos preservados com a lei da época.',
  },
]

export default function Trust() {
  return (
    <section id="trust" className="py-20 bg-dark-900 border-t border-dark-600">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Seus Dados. Sua Confiança.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 text-center mt-3 max-w-2xl mx-auto">
            Previdência é um direito sensível. Seus clientes confiam em você, e você confia no Previando.
            Construímos a plataforma com segurança e transparência desde o primeiro dia.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {trustItems.map((item) => (
            <Reveal key={item.title}>
              <div className="bg-dark-700 border border-dark-600 p-6 transition-all duration-200 group hover:border-amber-400/30 hover:shadow-hover">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-semibold text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
