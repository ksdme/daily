import dayjs from 'dayjs'

// Returns the unit of time the given time falls in.
export default function useTimeUnit(milliseconds: number) {
  const today = dayjs().startOf('day')
  const target = dayjs(milliseconds)

  // Calculate the age of the time.
  const age = target.diff(today, 'minutes')
  const units = age / 15

  // Returns the current slot.
  return Math.floor(units)
}
