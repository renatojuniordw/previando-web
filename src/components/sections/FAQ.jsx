import { useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { trackEvent } from '../../lib/analytics'
import { faqs } from '../../data/faqs'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-dark-600 py-4">
      <button
        className="flex justify-between items-center w-full text-left cursor-pointer text-gray-900 font-medium py-1 group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="group-hover:text-amber-400 transition-colors">{question}</span>
        <span
          className={`text-amber-400 text-xl transition-transform duration-200 shrink-0 ml-4 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    const willOpen = openIndex !== index
    setOpenIndex(willOpen ? index : null)
    if (willOpen) trackEvent('faq_open', { question: faqs[index].question })
  }

  return (
    <section id="faq" className="py-20 bg-dark-900">
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading title="Perguntas Frequentes" />

        <Reveal>
          <div className="max-w-[760px] mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
