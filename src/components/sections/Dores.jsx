import Reveal from '../ui/Reveal'

const dores = [
  {
    icon: '⏱️',
    title: 'Horas perdidas por caso',
    description:
      'Um cálculo que deveria levar 15 minutos leva 2 horas. Multiplique por 30 casos por mês.',
  },
  {
    icon: '⚠️',
    title: 'Medo de errar',
    description:
      'Uma regra de transição errada, um índice incorreto, um período não considerado — cada erro pode custar milhares em honorários ou uma ação de indenização.',
  },
  {
    icon: '📉',
    title: 'Perda de controle',
    description:
      'Planilhas espalhadas, prazos perdidos, clientes sem retorno. O escritório cresce mas o processo continua artesanal.',
  },
]

export default function Dores() {
  return (
    <section id="dores" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            O Cálculo Previdenciário ainda toma horas do seu dia?
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            Se você ainda abre planilhas, consulta tabelas e confere manualmente cada contribuição,
            está perdendo tempo que poderia estar usando para captar clientes e protocolar ações.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {dores.map((dor, index) => (
            <Reveal key={dor.title}>
              <div className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(26,71,200,0.08)] hover:shadow-[0_8px_40px_rgba(26,71,200,0.15)] hover:-translate-y-1 transition-all duration-200">
                <span className="text-3xl block mb-4">{dor.icon}</span>
                <h3 className="text-gray-900 font-semibold text-lg">{dor.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{dor.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
