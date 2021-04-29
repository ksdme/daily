import Schedule from '../components/Schedule/Schedule'
import NowContext from '../contexts/now'
import { ScheduleModel } from '../hooks/useSchedule'
import useTicker from '../hooks/useTicker'
import useTimeUnit from '../hooks/useTimeUnit'

const schedule: ScheduleModel = [
  { starts: 44, ends: 46, title: 'Wake up' },
  { starts: 47, ends: 49, title: 'Start the day' },
  { starts: 56, ends: 62, title: 'Attend meetings' },
]

export default function Home() {
  const lastTick = useTicker(
    60 * 1000
  )

  const timeUnit = (
    useTimeUnit(lastTick)
  )

  return (
    <div className="w-screen h-screen flex flex-col px-4 py-2">
      <NowContext.Provider value={timeUnit}>
        <Schedule schedule={schedule} />
      </NowContext.Provider>
    </div>
  )
}
