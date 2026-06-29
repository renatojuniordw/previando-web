import Reveal from '../ui/Reveal'

const metrics = [
  {
    value: '14',
    label: 'Modalidades de cálculo',
    highlighted: false,
  },
  {
    value: '2h → 10min',
    label: 'Tempo médio por caso',
    highlighted: true,
  },
  {
    value: '12',
    label: 'Tipos de benefício',
    highlighted: false,
  },
]

export default function ProvaSocial() {
  return (
    <section id="prova-social" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Confiado por Advogados Previdenciários em Todo o Brasil
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-gray-400 text-center mt-3">
            Plataforma escalável para escritórios de todos os tamanhos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {metrics.map((m, i) => (
            <Reveal key={m.label}>
              {m.highlighted ? (
                <div className="bg-blue-primary text-white rounded-[16px] p-8 text-center shadow-[0_8px_32px_rgba(26,71,200,0.25)]">
                  <p className="text-5xl md:text-6xl font-black leading-none">{m.value}</p>
                  <p className="text-white/75 text-sm mt-3">{m.label}</p>
                </div>
              ) : (
                <div className="bg-white rounded-[16px] p-8 text-center shadow-[0_4px_24px_rgba(26,71,200,0.08)]">
                  <p className="text-5xl md:text-6xl font-black leading-none text-gray-900">
                    {m.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-3">{m.label}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
