import { useEffect, useState } from 'react'

export default function useTicker(interval: number) {
  const [
    lastTick,
    setLastTick,
  ] = useState(Date.now())

  const tick = () => {
    setLastTick(Date.now())
  }

  const setUpTicker = () => {
    const timer = setInterval(tick, interval)
    return () => clearInterval(timer)
  }

  useEffect(
    setUpTicker,
    [],
  )

  return lastTick
}
