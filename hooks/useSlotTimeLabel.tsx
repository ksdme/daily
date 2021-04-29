import { useMemo } from 'react'
import dayjs from 'dayjs'
import { UnitTime } from '../config'

export default function useSlotTimeLabel(offsetUnits: number) {
  const builder = () => {
    return dayjs()
      .startOf('day')
      .set('minutes', offsetUnits * UnitTime)
      .format('h:mm A')
  }

  const time = useMemo(
    builder,
    [offsetUnits],
  )

  return time
}
