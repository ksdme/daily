import classnames from 'classnames'
import useColor from '../../../hooks/useColor'
import useSlotTime from '../../../hooks/useSlotTime'
import Block from '../../Block/Block'
import Hand from '../../Hand/Hand'

interface Props {
  title: string
  duration: number
  starts: number
}

export default function Slot({ title, duration, starts }: Props) {
  const color = (
    useColor(title)
  )

  const time = (
    useSlotTime(starts)
  )

  return (
    <div className="my-2 relative z-10">
      <div className={`flex items-center`}>
        <Block text={time} units={duration} color={color} />
        <Hand text={title} handColor="gray-300" />
      </div>

      <div className="absolute w-full -z-10 top-0">
        <Hand text="Now" handColor={color} textColor={color} />
      </div>
    </div>
  )
}
