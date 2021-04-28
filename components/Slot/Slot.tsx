import classnames from 'classnames'
import Block from '../Block/Block'
import Hand from '../Hand/Hand'

interface Props {
  title: string
  duration: number
  starts: string
  topPad?: boolean
  bottomPad?: boolean
}

export default function Slot({ title, duration, starts, topPad = true, bottomPad = false }: Props) {
  const classes = classnames({
    'pt-4': topPad,
    'pb-4': bottomPad,
  })

  return (
    <div className={`flex items-center ${classes}`}>
      <Block text={starts} units={duration} colorSeed={title} />
      <Hand text={title} handColor="gray-400" />
    </div>
  )
}
