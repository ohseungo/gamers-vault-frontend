import LoginView from "components/auth/LoginView";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row justify-center">
        <LoginView />
      </div>
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
