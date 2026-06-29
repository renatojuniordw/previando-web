import { useState } from 'react'
import Reveal from '../ui/Reveal'

const faqs = [
  {
    question: 'Preciso instalar alguma coisa?',
    answer:
      'Não. O Previando roda direto no navegador, em qualquer computador. Sem instalação, sem configuração. Acesse de qualquer lugar.',
  },
  {
    question: 'Os cálculos são confiáveis juridicamente?',
    answer:
      'Sim. Os cálculos seguem as fórmulas oficiais da legislação previdenciária, incluindo todas as regras de transição da EC 103/2019 e atualizações de teto e salário mínimo. O parecer da IA é um rascunho — o advogado sempre revisa.',
  },
  {
    question: 'Meus dados ficam seguros?',
    answer:
      'CPFs são armazenados de forma criptografada. PDFs são processados e armazenados em nuvem segura. Nenhum dado é compartilhado com terceiros. Servidor no Brasil.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Sem multa, sem fidelidade. Cancele pelo painel e o plano fica ativo até o fim do período pago.',
  },
  {
    question: 'E se a legislação mudar?',
    answer:
      'O sistema é atualizado automaticamente. Quando há novas regras — novo teto, novas modalidades, novas tabelas — a atualização entra sem ação da sua parte. Cálculos antigos ficam preservados com a lei da época.',
  },
  {
    question: 'O que é o Portal do Cliente?',
    answer:
      'É um link que você envia para o cliente acompanhar o caso. Ele vê os valores calculados, documentos e pode simular cenários. Reduz em até 70% as ligações perguntando "e o processo?"',
  },
]

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 py-4">
      <button
        className="flex justify-between items-center w-full text-left cursor-pointer text-gray-900 font-medium py-1"
        onClick={onToggle}
      >
        <span>{question}</span>
        <span
          className={`text-blue-primary text-xl transition-transform duration-200 shrink-0 ml-4 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-[760px] mx-auto mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
