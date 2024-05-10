import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Sponsors from "./Sponsors";
import PartnerWithUs from "./PartnerWithUs";
import Feature from "./Feature/Feature";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FoodBridge | Home</title>
      </Helmet>
      <Banner></Banner>
      <Feature></Feature>
      <Sponsors></Sponsors>
      <PartnerWithUs></PartnerWithUs>
    </div>
  );
};

export default Home;
