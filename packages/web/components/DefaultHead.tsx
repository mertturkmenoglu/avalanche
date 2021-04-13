import Head from 'next/head';
import DefaultSeo from './DefaultSeo';

const DefaultHead = (): JSX.Element => (
  <>
    <Head>
      <title>Avalanche</title>
      <DefaultSeo />
      <link rel="icon" type="image/svg" href="/mountains.svg" />
    </Head>
  </>
);

export default DefaultHead;
