import useSpotlight from '../../hooks/useSpotlight'

export default function GlowCard({ children, className = '', ...props }) {
  const onMouseMove = useSpotlight()

  return (
    <div
      onMouseMove={onMouseMove}
      className={`spotlight-card card-lift glass rounded-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
