import Hand from '../components/Hand/Hand'
import Schedule from '../components/Schedule/Schedule'
import NowContext from '../contexts/now'
import useColor from '../hooks/useColor'
import { ScheduleModel } from '../hooks/useSchedule'
import useTicker from '../hooks/useTicker'
import useTimeUnit from '../hooks/useTimeUnit'
import schedule from '../schedules/ksdme'

export interface UserModel {
  name: string
  schedule: ScheduleModel
}

interface Props {
  user: UserModel
}

export default function Home({ user }: Props) {
  const lastTick = useTicker(
    60 * 1000
  )

  const timeUnit = (
    useTimeUnit(lastTick)
  )

  const nameColor = (
    useColor(user.name)
  )

  return (
    <div className="flex flex-col items-end px-4 py-2">
      <div className="w-full bg-white text-gray-400 py-4">
        <Hand
          center={false}
          text={user.name}
          handColor={nameColor}
          textColor={nameColor} />
      </div>

      <div className="md:w-9/12 md:m-16 lg:w-1/3 xl:w-2/5">
        <NowContext.Provider value={timeUnit}>
          <Schedule schedule={user.schedule} />
        </NowContext.Provider>
      </div>
    </div>
  )
}

Home.getInitialProps = async (): Promise<Props> => {
  return {
    user: schedule,
  }
}
