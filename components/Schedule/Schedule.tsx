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
    const duration = (
      slot.ends - slot.starts
    )

    if (slot.title === null) {
      return (
        <IdleSlot
          key={index}
          duration={duration} />
      )
    }

    return (
      <ScheduleSlot
        key={index}
        title={slot.title}
        duration={duration}
        starts={slot.starts}
        bottomPad={index === schedule.length - 1} />
    )
  })

  return (
    <React.Fragment>
      {elements}
    </React.Fragment>
  )
}
