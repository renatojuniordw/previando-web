const items = [
  'Conforme EC 103/2019',
  'Integração DataJud/CNJ',
  'LGPD',
  'Servidores no Brasil',
  'Atualização automática da legislação',
]

export default function TrustBar() {
  return (
    <div className="border-y border-dark-600 bg-dark-800/60">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-4">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-400 text-xs font-medium tracking-wide uppercase">
              <svg className="w-3 h-3 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
