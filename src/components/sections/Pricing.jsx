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
    ctaPrimary: false,
  },
  {
    name: 'SOLO',
    price: 'R$ 97/mês',
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
    ctaPrimary: true,
  },
  {
    name: 'PRO',
    price: 'R$ 197/mês',
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
    ctaPrimary: false,
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Comece Grátis. Evolua quando quiser.
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 text-center mt-3">Sem fidelidade. Cancele a qualquer momento.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={
                  plan.popular
                    ? 'bg-white rounded-[16px] p-8 border-2 border-blue-primary shadow-[0_8px_40px_rgba(26,71,200,0.15)] scale-[1.03] relative'
                    : 'bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(26,71,200,0.08)]'
                }
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                    Mais Popular
                  </span>
                )}

                <h3 className="text-gray-900 text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.for}</p>
                <p className="text-3xl font-black text-gray-900 mt-4">{plan.price}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included ? <CheckIcon /> : <XIcon />}
                      <span className={f.included ? 'text-gray-600' : 'text-gray-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.previando.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    plan.ctaPrimary
                      ? 'block text-center bg-blue-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1539A8] transition-colors mt-8'
                      : 'block text-center bg-white text-blue-primary border-2 border-blue-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-light transition-colors mt-8'
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
          <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto italic leading-relaxed">
            Um único caso de revisão de benefício pode gerar entre <strong className="not-italic">R$ 5.000 e R$ 30.000</strong> em honorários.
            <br />
            O Previando Solo custa <strong className="not-italic">R$ 97/mês</strong> — menos de R$ 3,50 por dia.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
