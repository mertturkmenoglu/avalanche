import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';

import { Provider as UrqlProdiver } from 'urql';

import AppContext, { AppContextType } from '../contexes/AppContext';
import { client } from '../utils/urqlClient';
import DefaultHead from '../components/DefaultHead';

const values: AppContextType = {
  username: 'adminmert',
  userImage: '/profile.png',
  appbar: true,
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppContext.Provider value={values}>
    <UrqlProdiver value={client}>
      <DefaultHead />
      <Component {...pageProps} />
    </UrqlProdiver>
  </AppContext.Provider>
);

export default MyApp;
