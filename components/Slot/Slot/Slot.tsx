import { useContext, useEffect } from 'react'
import NowContext from '../../../contexts/now'
import useColor from '../../../hooks/useColor'
import useKeepInView from '../../../hooks/useKeepInView'
import { SlotModel } from '../../../hooks/useSchedule'
import useSlotTimeLabel from '../../../hooks/useSlotTimeLabel'
import makeProgressPositionStyle from '../../../utils/makeProgressPositionStyle'
import Block from '../../Block/Block'
import Hand from '../../Hand/Hand'

interface Props {
  slot: SlotModel
}

export default function Slot({ slot }: Props) {
  const color = (
    useColor(slot.title + slot.starts.toString())
  )

  const slotStartTime = (
    useSlotTimeLabel(slot.starts)
  )

  const now = useContext(
    NowContext,
  )

  const nowIndicatorHand = (
    useKeepInView()
  )

  const active = (
    now >= slot.starts && now < slot.ends
  )

  let nowStyle: any = {
    display: 'none',
  }

  let blockContainerStyle: any = {
    alignItems: 'center',
  }

  // Runs everytime the current time unit has been updated.
  // Also, re-centers the hand only if the current slot is the
  // active one.
  useEffect(() => {
    if (active) {
      nowIndicatorHand.bringIntoView()
    }
  }, [now])

  // This is not part of the hook because it calculates some conditional
  // styling of sub components and it does need to run on ever render.
  if (active) {
    const fraction = (
      (now - slot.starts) / (slot.ends - slot.starts)
    )

    nowStyle = makeProgressPositionStyle(
      fraction,
    )

    // To prevent the information hand and the indicator hand overlaying
    // on top of each other, move the information hand away to the top
    // to make space for the indicator.
    if (fraction >= 0.35 && fraction <= 0.65) {
      blockContainerStyle = {
        alignItems: 'start',
      }
    }
  }

  return (
    <div className="my-2 relative z-10">
      <div style={blockContainerStyle} className="flex">
        <Block text={slotStartTime} units={slot.duration} color={color} />
        <Hand text={slot.title} handColor="gray-300" /> {now}
      </div>

      <div style={nowStyle} className="absolute w-full -z-10" ref={nowIndicatorHand.ref}>
        <Hand text="Now" handColor={color} textColor={color} />
      </div>
    </div>
  )
}
