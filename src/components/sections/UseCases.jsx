import Reveal from '../ui/Reveal'

const cases = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <circle cx="16" cy="12" r="5" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Aposentadoria por Idade',
    description:
      'Cliente com 65 anos, 180 contribuições. O sistema lê o CNIS, calcula o salário de benefício, aplica o coeficiente e gera o parecer. Tudo em menos de 10 minutos.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M16 4v8l3-3M16 12l-3-3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20a10 10 0 0120 0" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'Revisão de Benefício',
    description:
      'Segurado já aposentado que pode ter direito a uma RMI maior. O sistema compara a regra usada na concessão com as demais modalidades disponíveis na época e identifica se há direito à revisão.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M8 6h16l4 6-12 16L4 12l4-6z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'BPC/LOAS',
    description:
      'Cliente idoso ou com deficiência, renda familiar per capita inferior a 1/4 do salário mínimo. O módulo BPC faz a pré-análise de viabilidade, analisa o laudo médico e gera o relatório social completo.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M8 14h16M8 20h10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M22 20l3 3 4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Planejamento Previdenciário',
    description:
      'Segurado com 55 anos quer saber se vale a pena contribuir por mais 5 anos sobre o teto. O simulador projeta o RMI futuro e compara com o cenário atual.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-dark-900">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Para Cada Tipo de Caso, uma Solução
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {cases.map((c) => (
            <Reveal key={c.title}>
              <div className="bg-dark-700 border border-dark-600 p-8 transition-all duration-200 group hover:border-amber-400/30 hover:shadow-hover hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-gray-900 font-semibold text-lg">{c.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
