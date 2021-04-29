import { useRef } from 'react'
import isClient from '../utils/isClient'

export default function useKeepInView() {
  const ref = (
    useRef(null)
  )

  const bringIntoView = () => {
    if (ref.current && isClient()) {
      const {
        top,
      } = ref.current.getBoundingClientRect()

      window.scroll({
        top,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return {
    ref,
    bringIntoView,
  }
}
