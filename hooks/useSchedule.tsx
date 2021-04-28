import { useMemo } from 'react'
import sortBy from 'lodash.sortby'

export interface SlotModel {
  title?: string
  starts: number
  ends: number
}

export type ScheduleModel = (
  SlotModel[]
)

export default function useSchedule(day: ScheduleModel) {
  const buildSchedule = () => {
    const sorted = sortBy(
      day,
      (slot) => slot.starts,
    )

    const schedule: ScheduleModel = []
    let dayAccountedUntil: number = 0

    sorted.forEach((slot, index) => {
      // Ignore the day until the first filled slot and also ignore
      // all the breaks that are smaller than 2 units of time.
      if (index > 0 && dayAccountedUntil < slot.starts - 2) {
        schedule.push({
          title: null,
          starts: dayAccountedUntil,
          ends: slot.starts,
        })
      }

      schedule.push(slot)
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
