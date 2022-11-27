import LoginView from "components/auth/LoginView";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

const Home: NextPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const router = useRouter();

  if (isLoggedIn) router.replace("/home");

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
