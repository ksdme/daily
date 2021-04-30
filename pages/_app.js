import '../styles/globals.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import React from 'react'
import smoothScroll from 'smoothscroll-polyfill'
import DefaultHead from '../components/Head/DefaultHead'
import isClient from '../utils/isClient'

// Polyfill scrolling behavior.
if (isClient()) {
  smoothScroll.polyfill()
}

// Apply plugins and set default timezone.
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Kolkata')

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultHead />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
