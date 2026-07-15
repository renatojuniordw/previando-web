import Reveal from '../ui/Reveal'
import CTAButton from '../ui/CTAButton'

const trustItems = ['Gratuito para começar', 'Sem cartão de crédito', 'Cancele quando quiser']

export default function Hero() {
  return (
    <section id="hero" className="grain min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-dark-900 relative">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-amber-400/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] w-full relative z-10">
        <Reveal>
          <span className="glass inline-block text-amber-400 px-4 py-1.5 text-sm font-medium mb-6 rounded-pill">
            Você ainda calcula aposentadoria no Excel?
          </span>
        </Reveal>

        <Reveal>
          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tighter text-gray-900 max-w-4xl">
            Inteligência{' '}
            <span className="gradient-text">Previdenciária</span>
            <br />
            para Advogados
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-2xl">
            A única plataforma construída especificamente para o advogado previdenciário.
            Faça o upload do CNIS e receba o cálculo completo — RMI, RMA, retroativos,
            comparativo de 22 cenários e parecer — em minutos, não em horas.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4 mt-8">
            <CTAButton section="hero">Começar Gratuitamente →</CTAButton>
            <CTAButton section="hero-secundario" href="/#features" variant="ghost">
              Ver Funcionalidades
            </CTAButton>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
