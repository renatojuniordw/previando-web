function DashboardPreview() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="10" y="10" width="280" height="180" rx="4" fill="#0B0F1A" stroke="#1E2A45" strokeWidth="1" />
      <rect x="10" y="10" width="280" height="28" rx="4" fill="#1E2A45" />
      <rect x="10" y="26" width="280" height="12" fill="#1E2A45" />

      <circle cx="26" cy="24" r="3" fill="#F59E0B" />
      <rect x="34" y="22" width="40" height="4" rx="2" fill="#F59E0B" opacity="0.6" />

      {/* Mini stat boxes */}
      <rect x="24" y="50" width="72" height="28" rx="2" fill="#131B2E" stroke="#1E2A45" strokeWidth="0.5" />
      <rect x="108" y="50" width="72" height="28" rx="2" fill="#131B2E" stroke="#1E2A45" strokeWidth="0.5" />
      <rect x="192" y="50" width="72" height="28" rx="2" fill="#131B2E" stroke="#1E2A45" strokeWidth="0.5" />

      <text x="30" y="62" fill="#94A3B8" fontSize="5">Casos</text>
      <text x="30" y="73" fill="#F8FAFC" fontSize="9" fontWeight="800">28</text>
      <text x="114" y="62" fill="#94A3B8" fontSize="5">RMI Méd</text>
      <text x="114" y="73" fill="#F8FAFC" fontSize="9" fontWeight="800">R$ 3.8K</text>
      <text x="198" y="62" fill="#94A3B8" fontSize="5">Honor.</text>
      <text x="198" y="73" fill="#F59E0B" fontSize="9" fontWeight="800">R$ 42K</text>

      {/* Mini bar chart */}
      <rect x="24" y="92" width="12" height="20" rx="1" fill="#F59E0B" opacity="0.9" />
      <rect x="40" y="78" width="12" height="34" rx="1" fill="#F59E0B" opacity="0.7" />
      <rect x="56" y="88" width="12" height="24" rx="1" fill="#F59E0B" opacity="0.5" />
      <rect x="72" y="96" width="12" height="16" rx="1" fill="#F59E0B" opacity="0.6" />
      <rect x="88" y="70" width="12" height="42" rx="1" fill="#F59E0B" />
      <rect x="104" y="82" width="12" height="30" rx="1" fill="#F59E0B" opacity="0.8" />

      {/* Right info */}
      <rect x="140" y="90" width="136" height="66" rx="2" fill="#131B2E" stroke="#1E2A45" strokeWidth="0.5" />
      <text x="148" y="104" fill="#94A3B8" fontSize="5">Último caso processado</text>
      <text x="148" y="116" fill="#F8FAFC" fontSize="7">Maria S. — Apos. por Idade</text>
      <text x="148" y="128" fill="#F59E0B" fontSize="7" fontWeight="700">RMI: R$ 2.450,00</text>
      <text x="148" y="140" fill="#CBD5E1" fontSize="5">Status: Parecer gerado com IA</text>

      {/* Bottom bar */}
      <rect x="24" y="170" width="56" height="12" rx="2" fill="#F59E0B" />
      <text x="30" y="179" fill="#0B0F1A" fontSize="5" fontWeight="700">Gerar Parecer</text>
    </svg>
  )
}

export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-20 bg-dark-900">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 border border-dark-600 p-12 md:p-16">
          {/* Ambient glow */}
          <div className="absolute top-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            {/* Left: text */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-gray-900">
                Inteligência Previdenciária
                <br />
                <span className="text-amber-400">para Advogados</span>
              </h2>
              <p className="text-gray-400 text-lg mt-4 max-w-xl">
                Comece agora e faça seu primeiro cálculo em minutos.
              </p>
              <a
                href="https://app.previando.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-400 text-dark-900 px-8 py-4 font-bold text-base hover:bg-amber-500 transition-all duration-200 mt-6"
              >
                Criar Conta Grátis →
              </a>
              <p className="text-gray-400 text-sm mt-3">
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>

            {/* Right: visual */}
            <div className="flex-1 w-full max-w-[320px]">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
