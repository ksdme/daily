import { useMemo } from 'react'
import dayjs from 'dayjs'

export default function useSlotTime(offsetUnits: number) {
  const builder = () => {
    return dayjs()
      .startOf('day')
      .set('minutes', offsetUnits * 15)
      .format('h:mm A')
  }

  const time = useMemo(
    builder,
    [offsetUnits],
  )

  return time
}
