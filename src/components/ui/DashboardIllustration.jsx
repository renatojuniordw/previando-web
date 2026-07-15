export default function DashboardIllustration() {
  return (
    <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <rect width="520" height="340" fill="#0B0F1A" />

      {/* Stats row */}
      <rect x="26" y="24" width="140" height="44" rx="4" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />
      <text x="36" y="42" fill="#94A3B8" fontSize="9" fontWeight="500">Casos ativos</text>
      <text x="36" y="58" fill="#F8FAFC" fontSize="16" fontWeight="800">28</text>

      <rect x="182" y="24" width="140" height="44" rx="4" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />
      <text x="192" y="42" fill="#94A3B8" fontSize="9" fontWeight="500">RMI média</text>
      <text x="192" y="58" fill="#F8FAFC" fontSize="16" fontWeight="800">R$ 3.847</text>

      <rect x="338" y="24" width="156" height="44" rx="4" fill="#131B2E" stroke="#F59E0B" strokeOpacity="0.35" strokeWidth="1" />
      <text x="348" y="42" fill="#94A3B8" fontSize="9" fontWeight="500">Honorários</text>
      <text x="348" y="58" fill="#F59E0B" fontSize="16" fontWeight="800">R$ 42.5K</text>

      {/* Chart area */}
      <rect x="26" y="84" width="288" height="146" rx="4" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />
      <text x="36" y="104" fill="#94A3B8" fontSize="9" fontWeight="500">Comparativo de Modalidades</text>

      <rect x="46" y="176" width="26" height="40" rx="2" fill="#F59E0B" opacity="0.9" className="bar-animate" style={{ animationDelay: '0.1s' }} />
      <rect x="80" y="148" width="26" height="68" rx="2" fill="#F59E0B" opacity="0.7" className="bar-animate" style={{ animationDelay: '0.2s' }} />
      <rect x="114" y="132" width="26" height="84" rx="2" fill="#F59E0B" opacity="0.5" className="bar-animate" style={{ animationDelay: '0.3s' }} />
      <rect x="148" y="158" width="26" height="58" rx="2" fill="#F59E0B" opacity="0.6" className="bar-animate" style={{ animationDelay: '0.4s' }} />
      <rect x="182" y="112" width="26" height="104" rx="2" fill="#F59E0B" className="bar-animate" style={{ animationDelay: '0.5s' }} />
      <rect x="216" y="128" width="26" height="88" rx="2" fill="#F59E0B" opacity="0.8" className="bar-animate" style={{ animationDelay: '0.6s' }} />
      <rect x="250" y="164" width="26" height="52" rx="2" fill="#F59E0B" opacity="0.55" className="bar-animate" style={{ animationDelay: '0.7s' }} />

      <text x="36" y="222" fill="#334155" fontSize="7">RMI (R$)</text>

      {/* Right panel — case list */}
      <rect x="330" y="84" width="164" height="146" rx="4" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />
      <text x="340" y="104" fill="#94A3B8" fontSize="9" fontWeight="500">Últimos casos</text>

      <rect x="340" y="116" width="7" height="7" rx="1.5" fill="#F59E0B" />
      <text x="354" y="123" fill="#F8FAFC" fontSize="9">Maria S. · Apos. Idade</text>
      <text x="354" y="135" fill="#F59E0B" fontSize="8">RMI R$ 2.450</text>

      <rect x="340" y="152" width="7" height="7" rx="1.5" fill="#F59E0B" opacity="0.7" />
      <text x="354" y="159" fill="#F8FAFC" fontSize="9">João P. · Revisão</text>
      <text x="354" y="171" fill="#F59E0B" fontSize="8">RMI R$ 5.820</text>

      <rect x="340" y="188" width="7" height="7" rx="1.5" fill="#F59E0B" opacity="0.5" />
      <text x="354" y="195" fill="#F8FAFC" fontSize="9">Ana C. · BPC/LOAS</text>
      <text x="354" y="207" fill="#F59E0B" fontSize="8">Análise completa</text>

      {/* Bottom bar — prontuário */}
      <rect x="26" y="246" width="468" height="72" rx="4" fill="#131B2E" stroke="#1E2A45" strokeWidth="1" />
      <text x="36" y="266" fill="#94A3B8" fontSize="9" fontWeight="500">Prontuário — Carlos A. (Aposentadoria por Idade)</text>

      <text x="36" y="284" fill="#F8FAFC" fontSize="9">Contribuições: 284 meses · Média SB: R$ 3.240,00 · Coeficiente: 91%</text>
      <text x="36" y="302" fill="#F59E0B" fontSize="10" fontWeight="700">RMI Estimada: R$ 2.948,00</text>

      <rect x="386" y="278" width="96" height="26" rx="3" fill="#F59E0B" />
      <text x="398" y="295" fill="#0B0F1A" fontSize="9" fontWeight="700">Gerar Parecer</text>
    </svg>
  )
}
