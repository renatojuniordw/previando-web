import Reveal from '../ui/Reveal'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column: text */}
          <div className="flex-1 lg:max-w-[55%]">
            <Reveal>
              <span className="inline-block bg-blue-light text-blue-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                Adeus ao Excel — Calculadora com IA para Previdenciário
              </span>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-gray-900">
                Inteligência Previdenciária
                <br />
                <span className="text-blue-primary">para Advogados</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                Chega de planilhas manuais e horas perdidas no Excel. A única plataforma construída especificamente para advogados previdenciários. Faça o upload do CNIS
                e receba o cálculo completo — RMI, RMA, retroativos e parecer — em minutos, não em horas.
              </p>
            </Reveal>

            <Reveal>
              <a
                href="https://app.previando.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-primary text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1539A8] transition-colors mt-8"
              >
                Começar Gratuitamente →
              </a>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                <span>✓ Gratuito para começar</span>
                <span>✓ Sem cartão de crédito</span>
                <span>✓ Cancele quando quiser</span>
              </div>
            </Reveal>
          </div>

          {/* Right column: visual */}
          <div className="flex-1 lg:max-w-[45%] w-full">
            <Reveal>
              <div className="bg-gradient-to-br from-blue-light to-white rounded-2xl shadow-[0_20px_60px_rgba(26,71,200,0.12)] h-[350px] md:h-[420px] w-full flex items-center justify-center overflow-hidden relative">
                {/* Dashboard mockup placeholder */}
                <div className="text-center px-8">
                  <div className="grid grid-cols-3 gap-3 mb-6 opacity-60">
                    <div className="h-16 bg-blue-primary/10 rounded-lg" />
                    <div className="h-16 bg-orange-accent/10 rounded-lg" />
                    <div className="h-16 bg-blue-primary/10 rounded-lg" />
                  </div>
                  <div className="h-32 bg-blue-primary/5 rounded-xl mb-4" />
                  <div className="flex gap-3">
                    <div className="flex-1 h-20 bg-blue-primary/8 rounded-lg" />
                    <div className="flex-1 h-20 bg-blue-primary/8 rounded-lg" />
                    <div className="flex-1 h-20 bg-blue-primary/8 rounded-lg" />
                  </div>
                  <p className="text-blue-primary/40 text-sm font-medium mt-4">
                    Preview do Dashboard
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
