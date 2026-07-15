import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-3xl mb-14 ${alignClass}`}>
      {eyebrow && (
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[length:var(--font-h2)] md:text-4xl font-black text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg mt-4 leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  )
}
