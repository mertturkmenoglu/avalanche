import '../styles/globals.css'

import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import AppContext, { AppContextType } from '../contexes/AppContext'

const values: AppContextType = {
  username: 'adminmert',
  userImage: '/profile.png',
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppContext.Provider value={values}>
      <Head>
        <title>Avalanche</title>
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
