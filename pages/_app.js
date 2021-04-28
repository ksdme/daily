import React from 'react'
import '../styles/globals.css'
import DefaultHead from '../components/Head/DefaultHead'

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultHead />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
