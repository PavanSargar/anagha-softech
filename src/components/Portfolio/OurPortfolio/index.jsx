/* eslint-disable react/prop-types */
import React from "react";
import Wrapper from "../../../libs/Wrapper";

import PORTFOLIOIMAGE from "../../../assets/images/portfolio-img.png";
import LOADERICON from "../../../assets/icons/loader.svg";
import BANNERIMG from "../../../assets/images/portfolio-banner.png";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../libs/Button/Button";

const OurPortfolio = ({ animation }) => {
  return (
    <Wrapper animation={animation}>
      <div className=" flex-wrap gap-5 d-flex align-items-center justify-content-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div
        data-aos={animation}
        className={`${styles.banner} mt-5 d-flex gap-5 align-items-center justify-content-between`}
      >
        <Image fluid src={BANNERIMG} alt="" />
        <div className={`${styles["banner-description"]}`}>
          <h3 className="H3 t-dark">Skillo || Web Apps Exploration </h3>
          <p className=" mt-5 mb-4 p-xl text-grey">
            Anagha Softech aims to turn every business into a success story with
            a cost-driven approach. 🏀
          </p>
          <Button fixed className="bg-blue">
            Full Case Study
          </Button>
        </div>
      </div>

      <div className="mt-5 d-flex align-items-center justify-content-center ">
        <Button className="bg-blue">
          {" "}
          <Image height={15} className="mb-1" src={LOADERICON} alt="" /> Load
          More
        </Button>
      </div>
    </Wrapper>
  );
};

export default OurPortfolio;

const Card = () => {
  return (
    <div className={`${styles.card} `}>
      <Image src={PORTFOLIOIMAGE} fluid alt="" />
      <div className="mb-3 mt-3 d-flex align-items-start justify-content-between">
        <h4 className="H4 t-dark">Skillo || Mobile App Exploration </h4>
        <span className={`${styles.tag} t-dark`}>_Branding</span>
      </div>
      <Link to="/portfolio/something">Full Case Study {`>`}</Link>
    </div>
  );
};
