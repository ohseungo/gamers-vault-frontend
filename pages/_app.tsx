import Head from "components/common/Head";
import Layout from "components/common/Layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "styles/main.css";
import "styles/base.css";
import wrapper from "store/store";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head />
      <Layout pageProps={props.pageProps}>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
