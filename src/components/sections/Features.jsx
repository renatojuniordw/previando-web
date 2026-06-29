import Reveal from '../ui/Reveal'

const features = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M6 16h4l3-8 4 16 3-8h4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Leitura Automática do CNIS',
    description:
      'Upload do PDF e extração automática com IA. O sistema lê todas as contribuições, períodos, vínculos e indicadores de pendência. Sem digitação. Sem erro humano.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M8 14h16M8 20h10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    title: 'Calculadora com 14 Modalidades',
    description:
      'Todas as regras de transição da EC 103/2019 e regras permanentes. 14 modalidades de cálculo — RMI, RMA, coeficiente e fator previdenciário. Atualizado automaticamente com a lei.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <circle cx="16" cy="10" r="4" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Parecer Jurídico com IA',
    description:
      'Gere pareceres preliminares com IA usando os dados reais do caso. A IA lê o CNIS, os cálculos e suas anotações do prontuário para gerar um rascunho técnico.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <circle cx="14" cy="14" r="7" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M19 19l7 7" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Consulta de Processos Judiciais',
    description:
      'Informe o número CNJ e receba automaticamente o andamento do processo. Resumo em linguagem clara gerado por IA. Monitoramento de movimentações em tempo real.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="4" y="8" width="10" height="16" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="20" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'Comparativo de 14 Modalidades',
    description:
      'O sistema calcula automaticamente todas as 14 modalidades para ambos os gêneros — 28 cenários — e mostra qual oferece o melhor RMI. Teste todas sem esforço manual.',
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
    description:
      'Com um clique, gere a petição inicial completa: dados do cliente, fundamentação legal, cálculos e pedidos. Copie, edite e protocole.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M16 4v8l3-3M16 12l-3-3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20a10 10 0 0120 0" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'Revisão de Benefício',
    description:
      'Identifique automaticamente se um benefício já concedido pode ser revisado. Suporta Revisão da Vida Toda, Art. 29, Buracos Negros e mais.',
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
    title: 'Prontuário Imutável por Caso',
    description:
      'Registre cada contato, documento e decisão. Histórico versionado e imutável — a IA lê suas anotações para gerar diagnósticos automáticos do caso.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M8 6h16l4 6-12 16L4 12l4-6z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="3" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
    title: 'Módulo BPC/LOAS',
    description:
      'Análise completa de viabilidade: pré-análise com IA, análise de laudo médico, relato social interativo por domínios CIF, perguntas para perícia e checklist de documentação.',
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
    description:
      'Controle de honorários por caso com status de pagamento. Calculadora de prescrição quinquenal para identificar o período prescrito automaticamente.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Tudo que o advogado previdenciário precisa em um só lugar
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <div className="bg-dark-700 border border-dark-600 p-6 transition-all duration-200 h-full group hover:border-amber-400/30 hover:shadow-hover hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 font-semibold text-sm">{feature.title}</h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
