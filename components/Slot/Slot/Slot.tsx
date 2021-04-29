import { useContext } from 'react'
import NowContext from '../../../contexts/now'
import useColor from '../../../hooks/useColor'
import useKeepInView from '../../../hooks/useKeepInView'
import { SlotModel } from '../../../hooks/useSchedule'
import useSlotTimeLabel from '../../../hooks/useSlotTimeLabel'
import buildProgressPosition from '../../../utils/buildProgressPosition'
import Block from '../../Block/Block'
import Hand from '../../Hand/Hand'

interface Props {
  slot: SlotModel
}

export default function Slot({ slot }: Props) {
  const color = (
    useColor(slot.title + slot.starts.toString())
  )

  const time = (
    useSlotTimeLabel(slot.starts)
  )

  const now = useContext(
    NowContext,
  )

  const nowIndicatorHand = (
    useKeepInView()
  )

  let nowStyle: any = {
    display: 'none',
  }

  if (now >= slot.starts && now < slot.ends) {
    nowStyle = buildProgressPosition(
      (now - slot.starts) / (slot.ends - slot.starts)
    )

    nowIndicatorHand.bringIntoView()
  }

  return (
    <div className="my-2 relative z-10">
      <div className={`flex items-center`}>
        <Block text={time} units={slot.duration} color={color} />
        <Hand text={slot.title} handColor="gray-300" />
      </div>

      <div style={nowStyle} className="absolute w-full -z-10" ref={nowIndicatorHand.ref}>
        <Hand text="Now" handColor={color} textColor={color} />
      </div>
    </div>
  )
}
