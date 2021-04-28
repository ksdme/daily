import Block from '../Block/Block'
import Hand from '../Hand/Hand'

interface Props {
  title: string
  duration: number
  starts: string
}

export default function Slot({ title, duration, starts }: Props) {
  return (
    <div className="flex items-center">
      <Block text={starts} units={duration} colorSeed={title} />
      <Hand text={title} handColor="gray-400" />
    </div>
  )
}
