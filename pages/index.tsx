import Schedule from '../components/Schedule/Schedule'
import NowContext from '../contexts/now'
import { ScheduleModel } from '../hooks/useSchedule'
import useTicker from '../hooks/useTicker'
import useTimeUnit from '../hooks/useTimeUnit'

export interface UserModel {
  name: string
  schedule: ScheduleModel
}

interface Props {
  user: UserModel
}

const sample: UserModel = {
  schedule: [
    { starts: 44, ends: 46, title: 'Wake up' },
    { starts: 47, ends: 49, title: 'Start the day' },
    { starts: 56, ends: 58, title: 'Attend meetings' },
    { starts: 58, ends: 60, title: 'Attend meetings' },
    { starts: 60, ends: 62, title: 'Attend meetings' },
  ],
  name: '@ksdme',
}

export default function Home({ user = sample }: Props) {
  const lastTick = useTicker(
    60 * 1000
  )

  const timeUnit = (
    useTimeUnit(lastTick)
  )

  return (
    <div className="flex flex-col items-center px-4 py-2">
      <div className="text-gray-400 my-16">
        {user.name}
      </div>

      <div className="md:w-9/12 md:m-16 lg:w-1/3">
        <NowContext.Provider value={timeUnit}>
          <Schedule schedule={user.schedule} />
        </NowContext.Provider>
      </div>
    </div>
  )
}
