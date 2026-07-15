import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'
import CountUp from '../ui/CountUp'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

const metrics = [
  { value: 22, label: 'Cenários comparados automaticamente por caso', highlighted: true },
  { value: 14, label: 'Modalidades de cálculo (EC 103/2019 + permanentes)' },
  { value: 12, label: 'Tipos de benefício cobertos' },
]

export default function ProvaSocial() {
  return (
    <section id="prova-social" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading
          title="Construído para o dia a dia do previdenciarista"
          subtitle="Um caso que levava 2 horas de planilha sai em cerca de 10 minutos — do CNIS ao parecer."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <Reveal key={m.label}>
              {m.highlighted ? (
                <div className="gradient-border rounded-lg p-8 text-center h-full">
                  <p className="text-5xl md:text-6xl font-black leading-none text-amber-400 text-glow">
                    <CountUp value={m.value} />
                  </p>
                  <p className="text-gray-400 text-sm mt-3">{m.label}</p>
                </div>
              ) : (
                <GlowCard className="p-8 text-center h-full">
                  <p className="text-5xl md:text-6xl font-black leading-none text-gray-900">
                    <CountUp value={m.value} />
                  </p>
                  <p className="text-gray-400 text-sm mt-3">{m.label}</p>
                </GlowCard>
              )}
            </Reveal>
          ))}
        </div>

        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <GlowCard className="p-8 h-full flex flex-col">
                  <p className="text-gray-600 leading-relaxed flex-1">“{t.quote}”</p>
                  <div className="mt-6 pt-4 border-t border-dark-600">
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {t.role}
                      {t.city ? ` · ${t.city}` : ''}
                    </p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
