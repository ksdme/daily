import '../styles/globals.css'
import React from 'react'
import smoothScroll from 'smoothscroll-polyfill'
import DefaultHead from '../components/Head/DefaultHead'
import isClient from '../utils/isClient'

if (isClient()) {
  smoothScroll.polyfill()
}

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultHead />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
