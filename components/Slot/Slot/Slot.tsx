import useColor from '../../../hooks/useColor'
import { SlotModel } from '../../../hooks/useSchedule'
import useSlotTime from '../../../hooks/useSlotTime'
import Block from '../../Block/Block'
import Hand from '../../Hand/Hand'

interface Props {
  slot: SlotModel
}

export default function Slot({ slot }: Props) {
  const color = (
    useColor(slot.title)
  )

  const time = (
    useSlotTime(slot.starts)
  )

  return (
    <div className="my-2 relative z-10">
      <div className={`flex items-center`}>
        <Block text={time} units={slot.duration} color={color} />
        <Hand text={slot.title} handColor="gray-300" />
      </div>

      <div className="absolute w-full -z-10 top-0">
        <Hand text="Now" handColor={color} textColor={color} />
      </div>
    </div>
  )
}
