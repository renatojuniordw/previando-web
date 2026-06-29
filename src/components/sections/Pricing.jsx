import Reveal from '../ui/Reveal'

const plans = [
  {
    name: 'FREE',
    price: 'Grátis',
    for: 'Testar a plataforma',
    popular: false,
    features: [
      { text: '3 clientes', included: true },
      { text: '5 cálculos/mês', included: true },
      { text: '1 parecer IA/mês', included: true },
      { text: 'Marca d\'água em PDFs', included: false },
      { text: 'Sem simulador', included: false },
      { text: 'Sem BPC/LOAS', included: false },
    ],
    cta: 'Começar Grátis',
  },
  {
    name: 'SOLO',
    price: 'R$ 97',
    period: '/mês',
    for: 'Advogado individual',
    popular: true,
    features: [
      { text: '30 clientes', included: true },
      { text: 'Cálculos ilimitados', included: true },
      { text: '20 pareceres IA/mês', included: true },
      { text: 'Petição Inicial (5/mês)', included: true },
      { text: 'Simulador de cenários futuros', included: true },
      { text: 'Cálculo de retroativos', included: true },
      { text: 'Consulta de Processos (30/mês)', included: true },
      { text: 'Revisão de benefícios (20/mês)', included: true },
      { text: 'BPC/LOAS (50 análises/mês)', included: true },
      { text: 'WhatsApp e Google Agenda', included: true },
      { text: 'Diagnóstico IA por prontuário', included: true },
      { text: 'PDF sem marca d\'água', included: true },
    ],
    cta: 'Assinar Solo',
  },
  {
    name: 'PRO',
    price: 'R$ 197',
    period: '/mês',
    for: 'Escritório com equipe',
    popular: false,
    features: [
      { text: 'Clientes ilimitados', included: true },
      { text: 'Cálculos ilimitados', included: true },
      { text: 'Pareceres IA ilimitados', included: true },
      { text: 'Petição Inicial ilimitada', included: true },
      { text: 'BPC/LOAS ilimitado', included: true },
      { text: 'Revisões ilimitadas', included: true },
      { text: 'Consultas de processos ilimitadas', included: true },
      { text: 'Portal do Cliente com simulador', included: true },
      { text: 'PDF sem marca d\'água', included: true },
    ],
    cta: 'Assinar Pro',
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-dark-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Comece Grátis. Evolua quando quiser.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 text-center mt-3">Sem fidelidade. Cancele a qualquer momento.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 items-start">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={
                  plan.popular
                    ? 'bg-dark-700 border-2 border-amber-400 p-8 relative shadow-glow'
                    : 'bg-dark-700 border border-dark-600 p-8'
                }
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-dark-900 text-xs px-3 py-1 font-bold rounded-sm">
                    Mais Popular
                  </span>
                )}

                <h3 className="text-gray-900 text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.for}</p>
                <p className="text-3xl font-black text-gray-900 mt-4">
                  {plan.price}
                  {plan.period && <span className="text-lg font-normal text-gray-400">{plan.period}</span>}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included ? <CheckIcon /> : <XIcon />}
                      <span className={f.included ? 'text-gray-400' : 'text-dark-600'}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.previando.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    plan.popular
                      ? 'block text-center bg-amber-400 text-dark-900 px-6 py-3 font-semibold text-sm hover:bg-amber-500 transition-colors mt-8'
                      : 'block text-center border border-dark-600 text-gray-400 px-6 py-3 font-semibold text-sm hover:border-amber-400/50 hover:text-amber-400 transition-colors mt-8'
                  }
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Anchor */}
        <Reveal>
          <p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto italic leading-relaxed">
            Um único caso de revisão de benefício pode gerar entre <strong className="not-italic text-gray-900">R$ 5.000 e R$ 30.000</strong> em honorários.
            <br />
            O Previando Solo custa <strong className="not-italic text-amber-400">R$ 97/mês</strong> — menos de R$ 3,50 por dia.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
