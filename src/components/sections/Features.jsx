import Reveal from '../ui/Reveal'

const features = [
  {
    icon: '📄',
    title: 'Leitura Automática do CNIS',
    description:
      'Upload do PDF e extração automática com IA. O sistema lê todas as contribuições, períodos, vínculos e indicadores de pendência. Sem digitação. Sem erro humano.',
  },
  {
    icon: '🧮',
    title: 'Calculadora com 14 Modalidades',
    description:
      'Todas as regras de transição da EC 103/2019 e regras permanentes. 14 modalidades de cálculo — RMI, RMA, coeficiente e fator previdenciário. Atualizado automaticamente com a lei.',
  },
  {
    icon: '⚖️',
    title: 'Parecer Jurídico com IA',
    description:
      'Gere pareceres preliminares com IA usando os dados reais do caso. A IA lê o CNIS, os cálculos e suas anotações do prontuário para gerar um rascunho técnico.',
  },
  {
    icon: '🔍',
    title: 'Consulta de Processos Judiciais',
    description:
      'Informe o número CNJ e receba automaticamente o andamento do processo. Resumo em linguagem clara gerado por IA. Monitoramento de movimentações em tempo real.',
  },
  {
    icon: '📊',
    title: 'Comparativo de 14 Modalidades',
    description:
      'O sistema calcula automaticamente todas as 14 modalidades para ambos os gêneros — 28 cenários — e mostra qual oferece o melhor RMI. Teste todas sem esforço manual.',
  },
  {
    icon: '📝',
    title: 'Petição Inicial Automática',
    description:
      'Com um clique, gere a petição inicial completa: dados do cliente, fundamentação legal, cálculos e pedidos. Copie, edite e protocole.',
  },
  {
    icon: '🔄',
    title: 'Revisão de Benefício',
    description:
      'Identifique automaticamente se um benefício já concedido pode ser revisado. Suporta Revisão da Vida Toda, Art. 29, Buracos Negros e mais.',
  },
  {
    icon: '📋',
    title: 'Prontuário Imutável por Caso',
    description:
      'Registre cada contato, documento e decisão. Histórico versionado e imutável — a IA lê suas anotações para gerar diagnósticos automáticos do caso.',
  },
  {
    icon: '🏛️',
    title: 'Módulo BPC/LOAS',
    description:
      'Análise completa de viabilidade: pré-análise com IA, análise de laudo médico, relato social interativo por domínios CIF, perguntas para perícia e checklist de documentação.',
  },
  {
    icon: '💰',
    title: 'Honorários e Prescrição',
    description:
      'Controle de honorários por caso com status de pagamento. Calculadora de prescrição quinquenal para identificar o período prescrito automaticamente.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Tudo que o advogado previdenciário precisa em um só lugar
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <div className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(26,71,200,0.08)] hover:shadow-[0_8px_40px_rgba(26,71,200,0.15)] hover:-translate-y-1 transition-all duration-200 h-full">
                <span className="text-2xl block mb-4">{feature.icon}</span>
                <h3 className="text-gray-900 font-semibold text-base">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
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
