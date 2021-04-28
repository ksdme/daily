interface Props {
  units: number
  unit?: number
}

export default function Block({ units, unit = 2 }: Props) {
  const style = {
    height: `${unit * units}rem`
  }

  return (
    <div style={style} className="w-1/3 bg-black rounded">
    </div>
  )
}
