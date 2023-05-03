import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Origo - Bysykkel</title>
        <meta name='description' content='Bysykkel oversikt' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
