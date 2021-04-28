import useHeight from '../../../hooks/useHeight'
import useIdleMessage from '../../../hooks/useIdleMessage'

interface Props {
  starts: number
  duration: number
}

export default function Idle({ starts, duration }: Props) {
  const height = (
    useHeight(duration)
  )

  const {
    action,
    result,
  } = useIdleMessage(starts)

  const style = {
    height: `${height}rem`
  }

  return (
    <div className="h-full">
      <div style={style} className="m-12 flex items-center justify-center text-sm text-left">
        <div className="text-gray-800">
          you don't have anything scheduled for this time slot, <span className="text-blue-800">
          {action}</span> and <span className="text-blue-800">{result}</span>.
        </div>
      </div>
    </div>
  )
}
