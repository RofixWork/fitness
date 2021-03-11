import Head from "next/head";
import Coaches from "../components/Coaches";
import Header from "../components/Header";
import Mass from "../components/Mass";
import Offer from "../components/Offer";
import Programs from "../components/Programs";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <>
      <Head>
        <title>Live preview for IronMass - Gym Fitness & Bodybuilding</title>
      </Head>
      <Header />
      <Programs />
      <Coaches />
      <Mass />
      <Testimonials />
      <Team />
      <Offer />
    </>
  );
};

export default Home;
