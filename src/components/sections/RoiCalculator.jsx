import { useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import GlowCard from '../ui/GlowCard'
import CTAButton from '../ui/CTAButton'
import { trackEvent } from '../../lib/analytics'

const SOLO_PRICE = 97
const MINUTES_WITH_PREVIANDO = 10

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

function Slider({ label, value, onChange, min, max, step, format }) {
  return (
    <label className="block">
      <span className="flex justify-between items-baseline text-sm mb-2">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-amber-400 font-bold text-lg">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onMouseUp={() => trackEvent('roi_calculated')}
        onTouchEnd={() => trackEvent('roi_calculated')}
        className="w-full accent-amber-400 cursor-pointer"
      />
    </label>
  )
}

export default function RoiCalculator() {
  const [casesPerMonth, setCasesPerMonth] = useState(10)
  const [hoursPerCase, setHoursPerCase] = useState(2)
  const [feePerCase, setFeePerCase] = useState(3000)

  const manualHours = casesPerMonth * hoursPerCase
  const previandoHours = (casesPerMonth * MINUTES_WITH_PREVIANDO) / 60
  const hoursSaved = Math.max(manualHours - previandoHours, 0)
  const extraCases = hoursPerCase > 0 ? Math.floor(hoursSaved / hoursPerCase) : 0
  const extraRevenue = extraCases * feePerCase

  return (
    <section id="roi" className="py-20 bg-dark-900">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading
          eyebrow="Faça as contas"
          title="Quanto tempo (e honorários) você deixa na mesa?"
          subtitle="Ajuste os números para a realidade do seu escritório. O resultado usa apenas os valores que você informar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Reveal>
            <GlowCard className="p-8 h-full">
              <div className="space-y-8">
                <Slider
                  label="Casos novos por mês"
                  value={casesPerMonth}
                  onChange={setCasesPerMonth}
                  min={1}
                  max={60}
                  step={1}
                  format={(v) => `${v}`}
                />
                <Slider
                  label="Horas por cálculo manual"
                  value={hoursPerCase}
                  onChange={setHoursPerCase}
                  min={0.5}
                  max={6}
                  step={0.5}
                  format={(v) => `${v}h`}
                />
                <Slider
                  label="Honorário médio por caso"
                  value={feePerCase}
                  onChange={setFeePerCase}
                  min={500}
                  max={30000}
                  step={500}
                  format={formatBRL}
                />
              </div>
            </GlowCard>
          </Reveal>

          <Reveal>
            <div className="gradient-border rounded-lg p-8 h-full flex flex-col justify-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Com o Previando (~10 min por cálculo)</p>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-4xl font-black text-amber-400">{Math.round(hoursSaved)}h</p>
                  <p className="text-gray-400 text-sm mt-1">economizadas por mês</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-amber-400">+{extraCases}</p>
                  <p className="text-gray-400 text-sm mt-1">casos extras possíveis com o tempo livre</p>
                </div>
              </div>

              <div className="border-t border-dark-600 mt-6 pt-6">
                <p className="text-gray-600 leading-relaxed">
                  {extraCases > 0 ? (
                    <>
                      Se você converter esse tempo em apenas <strong className="text-white">{extraCases} {extraCases === 1 ? 'caso' : 'casos'}</strong>, são{' '}
                      <strong className="text-amber-400">{formatBRL(extraRevenue)}</strong> a mais em honorários —
                      contra <strong className="text-white">{formatBRL(SOLO_PRICE)}/mês</strong> do plano Solo.
                    </>
                  ) : (
                    <>
                      Mesmo no seu volume, cada cálculo cai de {hoursPerCase}h para ~10 minutos —
                      e o plano Solo custa <strong className="text-white">{formatBRL(SOLO_PRICE)}/mês</strong>.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-8">
                <CTAButton section="roi-calculator">Recuperar essas horas →</CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
