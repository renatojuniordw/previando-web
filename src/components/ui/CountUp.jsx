import useCountUp from '../../hooks/useCountUp'

export default function CountUp({ value, prefix = '', suffix = '', className = '' }) {
  const { ref, value: current } = useCountUp(value)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}
