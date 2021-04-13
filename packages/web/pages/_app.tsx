import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';

import { Provider as UrqlProdiver } from 'urql';

import { AppContext, defaultAppContextValues } from '../contexes/AppContext';
import { client } from '../utils/urqlClient';
import DefaultHead from '../components/DefaultHead';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppContext.Provider value={defaultAppContextValues}>
    <UrqlProdiver value={client}>
      <DefaultHead />
      <Component {...pageProps} />
    </UrqlProdiver>
  </AppContext.Provider>
);

export default MyApp;
