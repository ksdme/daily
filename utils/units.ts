import { UnitTime } from '../config'

export default function units(hours: number, minutes: number) {
  return ((hours * 60) + minutes) / UnitTime
}
