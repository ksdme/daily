import { useRef } from 'react'
import isClient from '../utils/isClient'

// Allows you to always keeps a given element in view. Defaults
// to using the document scrolling element as the scroll parent
// and keeping the view at the center of the screen.
export default function useKeepInView() {
  const ref = (
    useRef(null)
  )

  const bringIntoView = () => {
    if (ref.current && isClient()) {
      const rootTop = (
        document.scrollingElement.scrollTop
      )

      const {
        top: elementTop,
      } = ref.current.getBoundingClientRect()

      const absoluteTop = (
        rootTop + elementTop
      )

      const top = (
        absoluteTop - window.innerHeight / 2
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
