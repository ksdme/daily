import useHeight from '../../../hooks/useHeight'
import useIdleMessage from '../../../hooks/useIdleMessage'

interface Props {
  duration: number
}

export default function Idle({ duration }: Props) {
  const height = (
    useHeight(duration)
  )

  const {
    action,
    result,
  } = useIdleMessage()

  const style = {
    height: `${height}rem`
  }

  return (
    <div style={style} className="m-8 flex items-center justify-center text-sm text-left">
      <div className="text-gray-800">
        you don't have anything scheduled for this time slot, <span className="text-blue-800">
        {action}</span> and <span className="text-blue-800">{result}</span>.
      </div>
    </div>
  )
}
