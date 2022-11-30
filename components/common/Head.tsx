import { DefaultSeo } from "next-seo";
import Head from "next/head";
import DEFAULT_SEO from "config/default-seo.config";
const ManagedHead = () => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
    </>
  );
};

export default ManagedHead;
