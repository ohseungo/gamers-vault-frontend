import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export async function getStaticProps() {
  return {
    props: {
      home: true,
    },
  };
}

export default Home;
