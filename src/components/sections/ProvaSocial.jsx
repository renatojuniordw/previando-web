import Reveal from '../ui/Reveal'

const metrics = [
  {
    value: '14',
    suffix: '',
    label: 'Modalidades de cálculo',
    highlighted: false,
  },
  {
    value: '2h',
    suffix: '→ 10min',
    label: 'Tempo médio por caso',
    highlighted: true,
  },
  {
    value: '12',
    suffix: '',
    label: 'Tipos de benefício',
    highlighted: false,
  },
]

export default function ProvaSocial() {
  return (
    <section id="prova-social" className="py-20 bg-dark-800">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {metrics.map((m) => (
            <Reveal key={m.label}>
              {m.highlighted ? (
                <div className="bg-dark-700 border border-amber-400/30 p-8 text-center shadow-glow animate-pulse-glow">
                  <p className="text-5xl md:text-6xl font-black leading-none text-amber-400">
                    {m.value}
                    {m.suffix && (
                      <span className="text-2xl md:text-3xl text-gray-400 font-medium mx-2">{m.suffix}</span>
                    )}
                  </p>
                  <p className="text-gray-400 text-sm mt-3">{m.label}</p>
                </div>
              ) : (
                <div className="bg-dark-700 border border-dark-600 p-8 text-center">
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
