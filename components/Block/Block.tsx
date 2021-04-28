import useColor from '../../hooks/useColor'

interface Props {
  text: string
  units: number
  unit?: number
  colorSeed: string
}

export default function Block({ text, colorSeed, units, unit = 5 }: Props) {
  const bgColor = (
    useColor(colorSeed)
  )

  const style = {
    height: `${unit * units}rem`
  }

  return (
    <div style={style} className={`w-6/12 md:w-1/4 bg-${bgColor} rounded shadow`}>
      <div className="m-2 text-sm text-white">
        {text}
      </div>
    </div>
  )
}
