import FeedList from "components/feed/FeedList/FeedList";
import Container from "components/ui/Container/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      Home Page
      <FeedList />
    </Container>
  );
};

export default Home;
