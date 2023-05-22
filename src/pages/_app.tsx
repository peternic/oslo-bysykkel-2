import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Origo - Bysykkel</title>
        <meta name='description' content='Bysykkel oversikt' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
