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
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default ManagedHead;
