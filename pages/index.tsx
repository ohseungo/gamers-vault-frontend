import LoginView from "components/auth/LoginView";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row justify-center">
      <LoginView />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      home: true,
    },
  };
}

export default Home;
