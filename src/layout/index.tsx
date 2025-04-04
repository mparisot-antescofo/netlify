import Head from 'next/head';
import { type ReactNode } from 'react';


type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <div
      >
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
