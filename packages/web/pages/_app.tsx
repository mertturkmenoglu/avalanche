import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import { AppContext, defaultAppContextValues } from '../contexes/AppContext';
import DefaultHead from '../components/DefaultHead';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AppContext.Provider value={defaultAppContextValues}>
    <DefaultHead />
    <Component {...pageProps} />
  </AppContext.Provider>
);

export default appWithTranslation(MyApp);
