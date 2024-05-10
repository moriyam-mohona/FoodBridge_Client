import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Sponsors from "./Sponsors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FoodBridge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
