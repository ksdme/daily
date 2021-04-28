import classnames from 'classnames'
import useColor from '../../../hooks/useColor'
import useSlotTime from '../../../hooks/useSlotTime'
import Block from '../../Block/Block'
import Hand from '../../Hand/Hand'

interface Props {
  title: string
  duration: number
  starts: number
  topPad?: boolean
  bottomPad?: boolean
}

export default function Slot({ title, duration, starts, topPad = true, bottomPad = false }: Props) {
  const color = (
    useColor(title)
  )

  const slotClasses = classnames({
    'mt-4': topPad,
    'mb-4': bottomPad,
  })

  const time = (
    useSlotTime(starts)
  )

  return (
    <div className="relative z-10">
      <div className={`flex items-center ${slotClasses}`}>
        <Block text={time} units={duration} color={color} />
        <Hand text={title} handColor="gray-300" />
      </div>

      <div className="absolute w-full -z-10 top-0">
        <Hand text="Now" handColor={color} textColor={color} />
      </div>
    </div>
  )
}
