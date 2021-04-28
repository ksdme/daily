import useHeight from '../../hooks/useHeight'

interface Props {
  text: string
  units: number
  color: string
}

export default function Block({ text, color, units }: Props) {
  const height = (
    useHeight(units)
  )

  const style = {
    height: `${height}rem`
  }

  return (
    <div style={style} className={`w-6/12 md:w-1/4 bg-${color} rounded shadow`}>
      <div className="m-2 text-sm text-white">
        {text}
      </div>
    </div>
  )
}
