/* eslint-disable react/prop-types */
import React from "react";
import HeroPortfolio from "../../components/Portfolio/HeroPortfolio";
import OurPortfolio from "../../components/Portfolio/OurPortfolio";
import Newsletter from "../../components/Newsletter";

const Portfolio = ({ animation }) => {
  return (
    <>
      <HeroPortfolio animation={animation} />
      <OurPortfolio animation={animation} />

      <Newsletter animation={animation} />
    </>
  );
};

export default Portfolio;
