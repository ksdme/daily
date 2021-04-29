import { useEffect, useRef } from 'react'
import isClient from '../utils/isClient'

export default function useKeepInView() {
  const ref = (
    useRef(null)
  )

  const bringIntoView = () => {
    if (ref.current && isClient()) {
      const {
        top: rootTop,
      } = document.body.getBoundingClientRect()

      const {
        top: elementTop,
      } = ref.current.getBoundingClientRect()

      const absoluteTop = (
        elementTop - rootTop
      )

      if (absoluteTop === 0) {
        return
      }

      const top = absoluteTop > 0
        ? absoluteTop - window.innerHeight / 2
        : absoluteTop + window.innerHeight / 2

      window.scroll({
        top,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(
    bringIntoView,
    [ref.current],
  )

  return {
    ref,
    bringIntoView,
  }
}
