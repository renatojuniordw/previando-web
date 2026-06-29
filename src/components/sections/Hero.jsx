import Reveal from '../ui/Reveal'

function DashboardIllustration() {
  return (
    <div className="animate-float">
      <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_20px_60px_rgba(245,158,11,0.15)]">
        {/* Card body */}
        <rect x="10" y="10" width="500" height="360" rx="8" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />

        {/* Header bar */}
        <rect x="10" y="10" width="500" height="44" rx="8" fill="#1E2A45" />
        <rect x="10" y="38" width="500" height="16" fill="#1E2A45" />

        {/* Logo dots */}
        <circle cx="36" cy="32" r="4" fill="#F59E0B" />
        <rect x="46" y="29" width="60" height="6" rx="3" fill="#F59E0B" opacity="0.8" />

        {/* Header right icons */}
        <circle cx="460" cy="32" r="3" fill="#334155" />
        <circle cx="476" cy="32" r="3" fill="#334155" />

        {/* Stats row */}
        <rect x="36" y="70" width="120" height="36" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="44" y="84" fill="#94A3B8" fontSize="8" fontWeight="500">Casos ativos</text>
        <text x="44" y="98" fill="#F8FAFC" fontSize="14" fontWeight="800">28</text>

        <rect x="172" y="70" width="120" height="36" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="180" y="84" fill="#94A3B8" fontSize="8" fontWeight="500">RMI média</text>
        <text x="180" y="98" fill="#F8FAFC" fontSize="14" fontWeight="800">R$ 3.847</text>

        <rect x="308" y="70" width="120" height="36" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="316" y="84" fill="#94A3B8" fontSize="8" fontWeight="500">Honorários</text>
        <text x="316" y="98" fill="#F59E0B" fontSize="14" fontWeight="800">R$ 42.5K</text>

        {/* Chart area */}
        <rect x="36" y="122" width="268" height="130" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="44" y="140" fill="#94A3B8" fontSize="8" fontWeight="500">Comparativo de Modalidades</text>

        {/* Bar chart */}
        <rect x="52" y="200" width="24" height="36" rx="2" fill="#F59E0B" opacity="0.9" className="bar-animate" style={{animationDelay: '0.1s'}} />
        <rect x="84" y="175" width="24" height="61" rx="2" fill="#F59E0B" opacity="0.7" className="bar-animate" style={{animationDelay: '0.2s'}} />
        <rect x="116" y="160" width="24" height="76" rx="2" fill="#F59E0B" opacity="0.5" className="bar-animate" style={{animationDelay: '0.3s'}} />
        <rect x="148" y="185" width="24" height="51" rx="2" fill="#F59E0B" opacity="0.6" className="bar-animate" style={{animationDelay: '0.4s'}} />
        <rect x="180" y="140" width="24" height="96" rx="2" fill="#F59E0B" className="bar-animate" style={{animationDelay: '0.5s'}} />
        <rect x="212" y="155" width="24" height="81" rx="2" fill="#F59E0B" opacity="0.8" className="bar-animate" style={{animationDelay: '0.6s'}} />
        <rect x="244" y="190" width="24" height="46" rx="2" fill="#F59E0B" opacity="0.55" className="bar-animate" style={{animationDelay: '0.7s'}} />

        {/* Y-axis label */}
        <text x="44" y="240" fill="#334155" fontSize="6">RMI (R$)</text>

        {/* Right panel - case list */}
        <rect x="320" y="122" width="170" height="130" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="328" y="140" fill="#94A3B8" fontSize="8" fontWeight="500">Últimos casos</text>

        {/* Case items */}
        <rect x="328" y="150" width="6" height="6" rx="1" fill="#F59E0B" />
        <text x="340" y="156" fill="#F8FAFC" fontSize="8">Maria S. · Apos. Idade</text>
        <text x="340" y="166" fill="#F59E0B" fontSize="7">RMI R$ 2.450</text>

        <rect x="328" y="182" width="6" height="6" rx="1" fill="#F59E0B" opacity="0.7" />
        <text x="340" y="188" fill="#F8FAFC" fontSize="8">João P. · Revisão</text>
        <text x="340" y="198" fill="#F59E0B" fontSize="7">RMI R$ 5.820</text>

        <rect x="328" y="214" width="6" height="6" rx="1" fill="#F59E0B" opacity="0.5" />
        <text x="340" y="220" fill="#F8FAFC" fontSize="8">Ana C. · BPC/LOAS</text>
        <text x="340" y="230" fill="#F59E0B" fontSize="7">Análise completa</text>

        {/* Bottom bar */}
        <rect x="36" y="268" width="448" height="84" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
        <text x="44" y="286" fill="#94A3B8" fontSize="8" fontWeight="500">Prontuário — Carlos A. (Aposentadoria por Idade)</text>

        <text x="44" y="304" fill="#F8FAFC" fontSize="8">Contribuições: 284 meses</text>
        <text x="44" y="316" fill="#F8FAFC" fontSize="8">Média SB: R$ 3.240,00</text>
        <text x="44" y="328" fill="#F8FAFC" fontSize="8">Coeficiente: 91%</text>
        <text x="44" y="340" fill="#F59E0B" fontSize="8" fontWeight="700">RMI Estimada: R$ 2.948,00</text>

        {/* CTA inside card */}
        <rect x="320" y="300" width="80" height="24" rx="2" fill="#F59E0B" />
        <text x="328" y="316" fill="#0B0F1A" fontSize="8" fontWeight="700">Gerar Parecer</text>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="grain min-h-screen flex items-center pt-16 overflow-hidden bg-dark-900">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-amber-400/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 lg:max-w-[55%]">
            <Reveal>
              <span className="inline-block border border-amber-400/20 bg-amber-400/10 text-amber-400 px-4 py-1.5 text-sm font-medium mb-6 rounded-sm">
                Adeus ao Excel — Calculadora com IA para Previdenciário
              </span>
            </Reveal>

            <Reveal>
              <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tighter text-gray-900">
                Inteligência{' '}
                <span className="text-amber-400 relative">
                  Previdenciária
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-400/30 rounded-sm" />
                </span>
                <br />
                para Advogados
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
                Chega de planilhas manuais e horas perdidas no Excel. A única plataforma construída especificamente para advogados previdenciários. Faça o upload do CNIS
                e receba o cálculo completo — RMI, RMA, retroativos e parecer — em minutos, não em horas.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://app.previando.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-dark-900 px-8 py-4 font-bold text-base hover:bg-amber-500 transition-all duration-200 shadow-glow inline-block"
                >
                  Começar Gratuitamente →
                </a>
                <a
                  href="#features"
                  className="border border-gray-100 text-gray-400 px-8 py-4 font-medium text-base hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 inline-block"
                >
                  Ver Funcionalidades
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Gratuito para começar
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Sem cartão de crédito
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Cancele quando quiser
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: SVG Dashboard */}
          <div className="flex-1 lg:max-w-[45%] w-full">
            <Reveal>
              <DashboardIllustration />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
