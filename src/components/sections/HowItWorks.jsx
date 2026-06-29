import Reveal from '../ui/Reveal'

const steps = [
  {
    step: 1,
    title: 'Upload do CNIS',
    description:
      'Faça o upload do PDF do portal Meu INSS. A IA extrai automaticamente todas as contribuições, períodos e vínculos.',
    highlighted: true,
  },
  {
    step: 2,
    title: 'Cálculo Automático',
    description:
      'Selecione a modalidade ou deixe o sistema sugerir a melhor. RMI, RMA, retroativos e comparativo em segundos.',
    highlighted: false,
  },
  {
    step: 3,
    title: 'Parecer e Gestão',
    description:
      'Gere o parecer jurídico com IA, acompanhe no Kanban, consulte processos judiciais sem abrir o PJe.',
    highlighted: false,
  },
  {
    step: 4,
    title: 'Petição Inicial',
    description:
      'Gere a petição inicial completa com IA. Do cálculo ao protocolo — tudo na mesma plataforma.',
    highlighted: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Quatro Passos. Um Caso Completo.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 text-center mt-3">
            Do upload do CNIS à petição final, em minutos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {steps.map((step) => (
            <Reveal key={step.step}>
              {step.highlighted ? (
                <div className="bg-blue-primary text-white rounded-[16px] p-8 h-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{step.description}</p>
                </div>
              ) : (
                <div className="bg-white shadow-[0_4px_24px_rgba(26,71,200,0.08)] rounded-[16px] p-8 h-full hover:shadow-[0_8px_40px_rgba(26,71,200,0.15)] hover:-translate-y-1 transition-all duration-200">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-light text-blue-primary font-bold text-sm mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-gray-900 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.description}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
