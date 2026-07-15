import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import CTAButton from '../ui/CTAButton'

const columns = ['Planilhas / Excel', 'Calculadoras tradicionais', 'Gestão jurídica genérica']

const rows = [
  { label: 'Leitura automática do CNIS com IA', values: [false, 'partial', false] },
  { label: '14 modalidades (EC 103/2019 + permanentes)', values: ['partial', 'partial', false] },
  { label: 'Comparativo automático de 22 cenários', values: [false, false, false] },
  { label: 'Petição inicial completa em 1 clique', values: [false, false, false] },
  { label: 'Portal do Cliente com simulador "E se?"', values: [false, false, 'partial'] },
  { label: 'Módulo BPC/LOAS completo', values: [false, false, false] },
  { label: 'Prontuário imutável do caso', values: [false, false, 'partial'] },
  { label: 'Atualização automática da legislação', values: [false, true, false] },
]

function CellIcon({ value }) {
  if (value === true) {
    return (
      <svg className="w-4 h-4 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-label="Sim">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (value === 'partial') {
    return <span className="text-gray-400 text-xs" aria-label="Parcial">Parcial</span>
  }
  return (
    <svg className="w-4 h-4 text-dark-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Não">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Comparativo() {
  return (
    <section id="comparativo" className="py-20 bg-dark-800">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading
          eyebrow="Comparativo"
          title="O fim do trabalho artesanal"
          subtitle="Compare o fluxo completo do Previando com as alternativas que o advogado previdenciário usa hoje."
        />

        <Reveal>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left text-gray-400 font-medium p-4 w-[32%]">Recurso</th>
                  <th className="p-2">
                    <div className="gradient-border rounded-lg px-4 py-3 text-amber-400 font-bold text-base">
                      Previando
                    </div>
                  </th>
                  {columns.map((col) => (
                    <th key={col} className="text-gray-400 font-semibold p-4">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-dark-600">
                    <td className="text-gray-600 p-4">{row.label}</td>
                    <td className="text-center p-4 bg-amber-400/5">
                      <svg className="w-5 h-5 text-amber-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-label="Sim">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center p-4">
                        <CellIcon value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="text-center mt-10">
          <CTAButton section="comparativo">Testar o fluxo completo grátis →</CTAButton>
        </Reveal>
      </div>
    </section>
  )
}
