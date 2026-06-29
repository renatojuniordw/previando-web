import Reveal from '../ui/Reveal'

const cases = [
  {
    icon: '👴',
    title: 'Aposentadoria por Idade',
    description:
      'Cliente com 65 anos, 180 contribuições. O sistema lê o CNIS, calcula o salário de benefício, aplica o coeficiente e gera o parecer. Tudo em menos de 10 minutos.',
  },
  {
    icon: '🔄',
    title: 'Revisão de Benefício',
    description:
      'Segurado já aposentado que pode ter direito a uma RMI maior. O sistema compara a regra usada na concessão com as demais modalidades disponíveis na época e identifica se há direito à revisão.',
  },
  {
    icon: '🏛️',
    title: 'BPC/LOAS',
    description:
      'Cliente idoso ou com deficiência, renda familiar per capita inferior a 1/4 do salário mínimo. O módulo BPC faz a pré-análise de viabilidade, analisa o laudo médico e gera o relatório social completo.',
  },
  {
    icon: '📈',
    title: 'Planejamento Previdenciário',
    description:
      'Segurado com 55 anos quer saber se vale a pena contribuir por mais 5 anos sobre o teto. O simulador projeta o RMI futuro e compara com o cenário atual.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Para Cada Tipo de Caso, uma Solução
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {cases.map((c) => (
            <Reveal key={c.title}>
              <div className="bg-gray-50 rounded-[16px] p-8 hover:shadow-[0_8px_40px_rgba(26,71,200,0.15)] hover:-translate-y-1 transition-all duration-200">
                <span className="text-2xl block mb-3">{c.icon}</span>
                <h3 className="text-gray-900 font-semibold text-lg">{c.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
