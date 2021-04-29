import { useRef } from 'react'
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

      const top = (
        elementTop - rootTop - window.innerHeight / 2
      )

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
