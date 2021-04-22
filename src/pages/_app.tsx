import Head from 'next/head';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>DepSist - BHSdev</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;
