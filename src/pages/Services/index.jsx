/* eslint-disable react/prop-types */
import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import OurServices from "../../components/Services/OurServices";
import ContactBanner from "../../components/ContactBanner";

const Services = ({ animate }) => {
  return (
    <>
      <ServiceHero animate={animate} />
      <OurServices animate={animate} />
      <ContactBanner animate={animate} />
    </>
  );
};

export default Services;
