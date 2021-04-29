import { useMemo } from 'react'

export interface SlotModel {
  title?: string
  starts: number
  ends: number
  duration?: number
}

export type ScheduleModel = (
  SlotModel[]
)

export default function useSchedule(day: ScheduleModel) {
  const buildSchedule = () => {
    const schedule: ScheduleModel = []
    let dayAccountedUntil: number = 0

    day.forEach((slot, index) => {
      // Ignore the day until the first filled slot and also ignore
      // all the breaks that are smaller than 2 units of time. Also,
      // enforces a maximum duration of the idle slot.
      if (index > 0 && dayAccountedUntil < slot.starts - 2) {
        schedule.push({
          title: null,
          starts: dayAccountedUntil,
          ends: slot.starts,
          duration: Math.min(slot.starts - dayAccountedUntil, 2.5),
        })
      }

      schedule.push({
        ...slot,
        duration: slot.ends - slot.starts,
      })

      dayAccountedUntil = slot.ends
    })

    return schedule
  }

  const schedule = useMemo(
    buildSchedule,
    [day],
  )

  return schedule
}
