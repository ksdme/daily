import useColor from '../../hooks/useColor'

interface Props {
  title: string
  units: number
  unit?: number
}

export default function Block({ title, units, unit = 6 }: Props) {
  const bgColor = (
    useColor(title)
  )

  const style = {
    height: `${unit * units}rem`
  }

  return (
    <div className="w-1/4 flex flex-col">
      <div className="text-sm text-gray-600">
        {title}
      </div>

      <div style={style} className={`bg-${bgColor} rounded shadow`}>
        &nbsp;
      </div>
    </div>
  )
}
