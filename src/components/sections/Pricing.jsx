import { useEffect, useRef } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import CTAButton from '../ui/CTAButton'
import { trackEvent } from '../../lib/analytics'

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
      { text: '10 anotações por caso', included: true },
      { text: 'PDFs com marca d’água', included: false },
      { text: 'Sem simulador e retroativos', included: false },
      { text: 'Sem BPC/LOAS e petição IA', included: false },
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
      { text: '5 petições iniciais IA/mês', included: true },
      { text: '50 análises BPC/LOAS/mês', included: true },
      { text: '30 interpretações de movimentações/mês', included: true },
      { text: 'Simulador de cenários futuros', included: true },
      { text: 'Cálculo de retroativos', included: true },
      { text: 'Diagnóstico IA do caso', included: true },
      { text: 'Portal do Cliente', included: true },
      { text: 'PDF timbrado sem marca d’água', included: true },
    ],
    cta: 'Testar Grátis',
  },
  {
    name: 'PRO',
    price: 'R$ 197',
    period: '/mês',
    for: 'Escritório com equipe',
    popular: false,
    features: [
      { text: 'Clientes ilimitados', included: true },
      { text: 'Pareceres IA ilimitados', included: true },
      { text: 'Petições iniciais ilimitadas', included: true },
      { text: 'Análises BPC/LOAS ilimitadas', included: true },
      { text: 'Interpretações de movimentações ilimitadas', included: true },
      { text: 'Tudo do Solo, sem limites mensais', included: true },
      { text: 'Portal do Cliente com simulador "E se?"', included: true },
    ],
    cta: 'Testar Grátis',
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
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('pricing_view')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading
          eyebrow="Planos"
          title="Comece Grátis. Evolua quando quiser."
          subtitle="Sem fidelidade. Cancele a qualquer momento."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={
                  plan.popular
                    ? 'gradient-border rounded-lg p-8 relative'
                    : 'glass card-lift rounded-lg p-8'
                }
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-dark-900 text-xs px-3 py-1 font-bold rounded-pill glow-sm">
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

                <CTAButton
                  section={`pricing-${plan.name.toLowerCase()}`}
                  variant={plan.popular ? 'primary' : 'ghost'}
                  className="w-full mt-8 px-6! py-3! text-sm"
                >
                  {plan.cta}
                </CTAButton>
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
