import get from 'lodash.get'
import random from 'random-seed'

const actionOptions = [
  'drink some water',
  'take a walk',
  'relax',
  'take a deep breath',
  'look away from screens',
  'smile for no reason',
  'listen to a song',
]

const resultOptions = [
  'enjoy the break',
  'reset yourself',
]

const generator = (
  random.create()
)

export default function useIdleMessage() {
  return {
    action: get(actionOptions, generator.range(actionOptions.length)),
    result: get(resultOptions, generator.range(resultOptions.length)),
  }
}
