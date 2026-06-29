import Reveal from '../ui/Reveal'

function ClockIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4">
      <circle cx="20" cy="20" r="16" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M20 12v8l6 4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="26" r="2" fill="#F59E0B" opacity="0.3" />
      <circle cx="20" cy="20" r="2" fill="#F59E0B" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4">
      <path d="M20 6l16 28H4L20 6z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 18v6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="28" r="1.5" fill="#F59E0B" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-4">
      <path d="M6 34V12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 34V18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M22 34V8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M30 34V22" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M4 34h32" stroke="#334155" strokeWidth="1" />
    </svg>
  )
}

const dores = [
  {
    icon: <ClockIcon />,
    title: 'Horas perdidas por caso',
    description:
      'Um cálculo que deveria levar 15 minutos leva 2 horas. Multiplique por 30 casos por mês.',
  },
  {
    icon: <AlertIcon />,
    title: 'Medo de errar',
    description:
      'Uma regra de transição errada, um índice incorreto, um período não considerado — cada erro pode custar milhares em honorários ou uma ação de indenização.',
  },
  {
    icon: <ChartIcon />,
    title: 'Perda de controle',
    description:
      'Planilhas espalhadas, prazos perdidos, clientes sem retorno. O escritório cresce mas o processo continua artesanal.',
  },
]

export default function Dores() {
  return (
    <section id="dores" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            O Cálculo Previdenciário ainda toma horas do seu dia?
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            Se você ainda abre planilhas, consulta tabelas e confere manualmente cada contribuição,
            está perdendo tempo que poderia estar usando para captar clientes e protocolar ações.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {dores.map((dor) => (
            <Reveal key={dor.title}>
              <div className="bg-dark-700 border border-dark-600 p-8 hover:border-amber-400/30 hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 h-full group">
                {dor.icon}
                <h3 className="text-gray-900 font-semibold text-lg">{dor.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{dor.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
