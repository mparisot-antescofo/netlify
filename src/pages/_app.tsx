import App, {
  type AppContext,
  type AppInitialProps,
  type AppProps,
} from 'next/app';
import Head from 'next/head';
import Layout from '@/layout';

type AppOwnProps = {
  data: string;
};

const MyApp = ({
  Component,
  pageProps,
  data
}: AppOwnProps & AppProps) => (
<Layout>
  <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
    />
  </Head>
  <Component {...pageProps} />
  <div>Random number: {data}</div>
</Layout>
);

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return {
    ...ctx,
    data: `${Math.random()}`,
  };
};

// https://github.com/i18next/next-i18next#unserializable-configs
export default MyApp;
