import useHeight from '../../../hooks/useHeight'
import useIdleMessage from '../../../hooks/useIdleMessage'
import { SlotModel } from '../../../hooks/useSchedule'

interface Props {
  slot: SlotModel
}

export default function Idle({ slot }: Props) {
  const height = (
    useHeight(slot.duration)
  )

  const {
    action,
    result,
  } = useIdleMessage(slot.starts)

  const style = {
    height: `${height}rem`
  }

  return (
    <div className="h-full">
      <div style={style} className="m-12 flex items-center justify-center text-sm text-left">
        <div className="bg-white text-gray-800">
          you don't have anything scheduled for this time slot, <span className="text-blue-800">
          {action}</span> and <span className="text-blue-800">{result}</span>.
        </div>
      </div>
    </div>
  )
}
