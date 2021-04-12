/* eslint-disable import/prefer-default-export */
import { createClient } from 'urql';
import { isProd } from './constants';

export const client = createClient({
  url: isProd ? '' : 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});
