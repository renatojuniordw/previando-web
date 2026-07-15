import Reveal from '../ui/Reveal'
import CTAButton from '../ui/CTAButton'

export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-20 bg-dark-900">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-lg p-12 md:p-16 text-center">
            <div className="absolute top-[-60%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] text-gray-900">
                Pronto para transformar
                <br />
                <span className="gradient-text">seus cálculos previdenciários?</span>
              </h2>
              <p className="text-gray-400 text-lg mt-5">
                Do upload do CNIS à petição inicial, em minutos.
                Comece grátis e veja o primeiro caso sair antes do café esfriar.
              </p>

              <div className="mt-8">
                <CTAButton section="cta-final">Criar Conta Grátis →</CTAButton>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
