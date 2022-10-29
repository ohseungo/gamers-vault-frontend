import Head from "components/common/Head";
import Layout from "components/common/Layout";
import type { AppProps } from "next/app";

import "styles/main.css";
import "styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
