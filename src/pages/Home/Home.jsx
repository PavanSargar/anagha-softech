import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import Banner from "../../components/Home/Banner/Banner";
import OurServices from "../../components/Home/OurServices";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import OurClients from "../../components/Home/OurClients";
import Testimonials from "../../components/Home/Testimonial";
import ServiceArea from "../../components/Home/ServiceArea";
import OurCompany from "../../components/Home/OurCompany";
import OurMission from "../../components/Home/OurMission";
import Query from "../../components/Home/Query";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <Hero />
      <Banner />
      <OurServices />
      <WhyChooseUs />
      <OurClients />
      <Testimonials />
      <ServiceArea />
      <OurCompany />
      <OurMission />
      <Query />
      <Newsletter />
    </div>
  );
};

export default Home;
