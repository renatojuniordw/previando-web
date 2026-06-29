export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="bg-blue-dark rounded-[24px] p-12 md:p-16 text-white overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: text */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1]">
                Inteligência Previdenciária
                <br />
                para Advogados
              </h2>
              <p className="text-white/70 text-lg mt-4 max-w-xl">
                Comece agora e faça seu primeiro cálculo em minutos.
              </p>
              <a
                href="https://app.previando.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-accent text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#D97008] transition-colors mt-6"
              >
                Criar Conta Grátis →
              </a>
              <p className="text-white/50 text-sm mt-3">
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>

            {/* Right: visual placeholder */}
            <div className="flex-1 w-full max-w-[300px]">
              <div className="bg-white/10 rounded-2xl h-[240px] flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="grid grid-cols-2 gap-2 mb-3 opacity-40">
                    <div className="h-10 bg-white/20 rounded-lg" />
                    <div className="h-10 bg-orange-accent/30 rounded-lg" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3 opacity-40">
                    <div className="h-14 bg-white/20 rounded-lg" />
                    <div className="h-14 bg-white/20 rounded-lg" />
                    <div className="h-14 bg-white/20 rounded-lg" />
                  </div>
                  <p className="text-white/30 text-xs font-medium">
                    Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
