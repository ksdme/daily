import React from 'react'
import useSchedule, { ScheduleModel } from '../../hooks/useSchedule'
import IdleSlot from '../Slot/Idle/Idle'
import ScheduleSlot from '../Slot/Slot/Slot'

interface Props {
  schedule: ScheduleModel,
}

export default function Schedule({ schedule }: Props) {
  const sortedSchedule = (
    useSchedule(schedule)
  )

  const elements = sortedSchedule.map((slot, index) => {
    if (slot.title === null) {
      return (
        <IdleSlot
          key={index}
          slot={slot} />
      )
    }

    return (
      <ScheduleSlot
        key={index}
        slot={slot} />
    )
  })

  return (
    <React.Fragment>
      {elements}
    </React.Fragment>
  )
}
