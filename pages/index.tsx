import Content from '../components/Content/Content'
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
  console.log(new Date())

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
    <div className="flex flex-col items-center px-4 py-2">
      <Content className="py-6">
        <Hand
          center={false}
          text={user.name}
          handColor={nameColor}
          textColor={nameColor} />
      </Content>

      <Content>
        <NowContext.Provider value={timeUnit}>
          <Schedule schedule={user.schedule} />
        </NowContext.Provider>
      </Content>
    </div>
  )
}

Home.getInitialProps = async (): Promise<Props> => {
  return {
    user: schedule,
  }
}
