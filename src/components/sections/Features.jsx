import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'

const featureData = [
  {
    category: 'Análise Inteligente com IA',
    items: [
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M6 16h4l3-8 4 16 3-8h4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Leitura Automática do CNIS',
        description: 'Upload do PDF e extração automática com IA. O sistema lê todas as contribuições, períodos e vínculos. Sem digitação. Sem erro humano.',
        size: 'md',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M8 14h16M8 20h10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          </svg>
        ),
        title: '14 Modalidades de Cálculo',
        description: 'Todas as regras de transição da EC 103/2019 e regras permanentes. RMI, RMA, coeficiente e fator previdenciário. Atualizado automaticamente.',
        size: 'md',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <rect x="4" y="8" width="10" height="16" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="18" y="4" width="10" height="20" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
          </svg>
        ),
        title: 'Comparativo de 22 Cenários',
        description: 'Todas as modalidades calculadas automaticamente, de uma vez. O sistema mostra qual regra oferece o melhor RMI para cada cliente — sem testar uma a uma.',
        size: 'lg',
        highlight: true,
      },
    ],
  },
  {
    category: 'Documentação Jurídica',
    items: [
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <circle cx="16" cy="10" r="4" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        title: 'Parecer Jurídico com IA',
        description: 'Rascunho técnico gerado pela IA usando os dados reais do CNIS, cálculos e anotações do prontuário. Você revisa e finaliza em minutos.',
        size: 'lg',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M8 6h12l6 6v14a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M20 6v6h6" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
            <path d="M12 22l3 3 5-6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        ),
        title: 'Petição Inicial Automática',
        description: 'Com um clique, gere a petição completa: dados do cliente, fundamentação legal, cálculos e pedidos. Copie, edite e protocole.',
        size: 'sm',
        highlight: true,
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M4 6h24v16H4V6z" stroke="#F59E0B" strokeWidth="1.5" rx="1" />
            <path d="M4 22h24v4H4z" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
            <circle cx="10" cy="12" r="1.5" fill="#F59E0B" />
            <circle cx="14" cy="12" r="1.5" fill="#F59E0B" opacity="0.5" />
          </svg>
        ),
        title: 'Prontuário Imutável',
        description: 'Histórico versionado de cada caso. A IA lê suas anotações para gerar diagnósticos automáticos do caso.',
        size: 'sm',
      },
    ],
  },
  {
    category: 'Gestão do Escritório',
    items: [
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <circle cx="14" cy="14" r="7" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M19 19l7 7" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        title: 'Consulta de Processos',
        description: 'Informe o número CNJ e receba o andamento automático. Resumo em linguagem clara gerado por IA. Monitoramento em tempo real.',
        size: 'sm',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M12 26l-4-4 4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 26l4-4-4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            <circle cx="16" cy="6" r="2" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M16 8v10" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
          </svg>
        ),
        title: 'Honorários e Prescrição',
        description: 'Controle de honorários por caso com status de pagamento. Calculadora de prescrição quinquenal automática.',
        size: 'sm',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M4 12h24M8 4v4M16 4v4M24 4v4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="4" y="12" width="24" height="16" rx="2" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
            <path d="M10 20h12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        title: 'Portal do Cliente',
        description: 'Link para o cliente acompanhar o caso, ver valores e simular cenários. Reduz em até 70% as ligações perguntando "e o processo?".',
        size: 'md',
      },
    ],
  },
  {
    category: 'Especialidades',
    items: [
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M16 4v8l3-3M16 12l-3-3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 20a10 10 0 0120 0" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="16" cy="20" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
          </svg>
        ),
        title: 'Revisão de Benefício',
        description: 'Identifique automaticamente se um benefício já concedido pode ser revisado. Suporta Vida Toda, Art. 29, Buracos Negros e mais.',
        size: 'sm',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M8 6h16l4 6-12 16L4 12l4-6z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="16" cy="14" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
          </svg>
        ),
        title: 'Módulo BPC/LOAS',
        description: 'Pré-análise com IA, análise de laudo médico, relato social interativo por domínios CIF e checklist de documentação completa.',
        size: 'sm',
      },
      {
        icon: (
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <circle cx="16" cy="16" r="10" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M16 10v6l4 2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="1.5" fill="#F59E0B" opacity="0.3" />
            <circle cx="22" cy="22" r="1.5" fill="#F59E0B" opacity="0.3" />
          </svg>
        ),
        title: 'Planejamento Previdenciário',
        description: 'Simulador de cenários futuros: projete o RMI para diferentes idades e contribuições. Mostre ao cliente o melhor caminho.',
        size: 'md',
      },
    ],
  },
]

const sizeClasses = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 md:col-span-1 lg:col-span-1',
  lg: 'col-span-1 lg:col-span-2 row-span-1',
}

function FeatureCard({ icon, title, description, highlight }) {
  const Wrapper = highlight ? 'div' : GlowCard
  const highlightClass = highlight ? 'gradient-border rounded-lg' : ''

  return (
    <Wrapper className={`p-6 group h-full ${highlightClass}`}>
      <div className="w-10 h-10 rounded-md bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-gray-900 font-semibold text-sm">{title}</h3>
      <p className="text-gray-400 text-xs mt-2 leading-relaxed">
        {description}
      </p>
    </Wrapper>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Tudo que o advogado previdenciário precisa em um só lugar
          </h2>
        </Reveal>

        {featureData.map((group) => (
          <div key={group.category} className="mt-16 first:mt-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-dark-600" />
                <h3 className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                  {group.category}
                </h3>
                <span className="h-px flex-1 bg-dark-600" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.items.map((feature) => (
                <Reveal key={feature.title} className={sizeClasses[feature.size] || 'col-span-1'}>
                  <FeatureCard {...feature} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
