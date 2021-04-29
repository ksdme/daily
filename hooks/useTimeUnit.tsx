import dayjs from 'dayjs'
import { UnitTime } from '../config'

export default function useTimeUnit(milliseconds: number) {
  const today = dayjs().startOf('day')
  const target = dayjs(milliseconds)

  const age = target.diff(today, 'minutes')
  return age / UnitTime
}
