import { registerLink } from '../../lib/links'
import { trackCtaClick } from '../../lib/analytics'

const variants = {
  primary:
    'btn-shine bg-amber-400 text-dark-900 font-semibold hover:bg-amber-500 glow-sm hover:glow-md transition-all',
  ghost:
    'border border-dark-600 text-gray-600 font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors',
}

export default function CTAButton({
  section,
  href,
  variant = 'primary',
  className = '',
  children,
}) {
  const url = href || registerLink(section)
  const external = url.startsWith('http')

  return (
    <a
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => trackCtaClick(section, url)}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-base rounded-lg ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
