/* eslint-disable react/prop-types */
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

import "react-multi-carousel/lib/styles.css";


const Home = ({ animation }) => {
  return (
    <div style={{ marginTop: "56px" }}>
      <Hero animation={animation} />
      <Banner animation={animation} />
      <OurServices animation={animation} />
      <WhyChooseUs animation={animation} />
      <OurClients animation={animation} />
      <Testimonials animation={animation} />
      <ServiceArea animation={animation} />
      <OurCompany animation={animation} />
      <OurMission animation={animation} />
      <Query animation={animation} />
      <Newsletter animation={animation} />
    </div>
  );
};

export default Home;
