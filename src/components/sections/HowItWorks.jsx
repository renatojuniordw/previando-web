import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'

function UploadIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M20 28V12M14 18l6-6 6 6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="#334155" strokeWidth="1" />
    </svg>
  )
}

function CalcIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M12 16h16M12 24h8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="#F59E0B" opacity="0.5" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M10 6h14l8 8v20a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M24 6v8h8" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M14 22h12M14 28h8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M20 8l-4 10h8L20 8z" fill="#F59E0B" opacity="0.3" stroke="#F59E0B" strokeWidth="1" />
      <path d="M20 18v6M20 28v2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="16" y="30" width="8" height="4" rx="1" fill="#F59E0B" opacity="0.2" stroke="#F59E0B" strokeWidth="0.5" />
    </svg>
  )
}

const steps = [
  {
    step: 1,
    icon: <UploadIcon />,
    title: 'Upload do CNIS',
    description:
      'Faça o upload do PDF do portal Meu INSS. A IA extrai automaticamente todas as contribuições, períodos e vínculos.',
  },
  {
    step: 2,
    icon: <CalcIcon />,
    title: 'Cálculo Automático',
    description:
      'Selecione a modalidade ou deixe o sistema sugerir a melhor. RMI, RMA, retroativos e comparativo em segundos.',
  },
  {
    step: 3,
    icon: <DocIcon />,
    title: 'Parecer e Gestão',
    description:
      'Gere o parecer jurídico com IA, acompanhe no Kanban, consulte processos judiciais sem abrir o PJe.',
  },
  {
    step: 4,
    icon: <GavelIcon />,
    title: 'Petição Inicial',
    description:
      'Gere a petição inicial completa com IA. Do cálculo ao protocolo — tudo na mesma plataforma.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-dark-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {steps.map((step, index) => (
            <Reveal key={step.step} style={{ transitionDelay: `${index * 0.12}s` }}>
              <GlowCard className="p-8 h-full">
                <div className="flex items-start gap-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-amber-400/30 bg-amber-400/10 text-amber-400 font-bold text-sm shrink-0 rounded-md glow-sm">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <div className="mb-2">{step.icon}</div>
                    <h3 className="text-gray-900 text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
