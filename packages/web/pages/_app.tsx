import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import AppContext, { AppContextType } from '../contexes/AppContext';

const values: AppContextType = {
  username: 'adminmert',
  userImage: '/profile.png',
  appbar: true,
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppContext.Provider value={values}>
    <Head>
      <title>Avalanche</title>
      <meta name="description" content="Avalanche Project Management" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="copyright" content="Mert Turkmenoglu" />
      <meta property="og:image" content="/mountains.svg" />
      <meta property="og:locale" content="en_GB" />
      <meta
        name="keywords"
        content="avalanche, project, management, project management, agile, teams"
      />
      <link rel="icon" type="image/svg" href="/mountains.svg" />
    </Head>
    <Component {...pageProps} />
  </AppContext.Provider>
);

export default MyApp;
