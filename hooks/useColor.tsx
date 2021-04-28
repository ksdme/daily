import get from 'lodash.get'
import random from 'random-seed'

const defaultColors = [
  'red-600',
  'blue-600',
  'indigo-600',
  'green-600',
  'purple-600',
  'gray-600',
  'black',
]

export default function useColor(seed: string, colors = defaultColors) {
  const generator = random.create(seed)
  const index = generator.range(colors.length)
  return get(colors, index)
}
