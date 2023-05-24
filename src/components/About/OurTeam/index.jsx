/* eslint-disable react/prop-types */
import React from "react";

import Wrapper from "../../../libs/Wrapper/index";

import styles from "./index.module.css";
import Button from "../../../libs/Button/Button";

import LINKEDIN from "../../../assets/icons/linkedin.svg";
import TEAMIMG from "../../../assets/images/team.svg";

import { Image } from "react-bootstrap";
import Carousel from "../../Slider";
import { HiOutlineArrowRight } from "react-icons/hi";

const OurTeam = ({ animation }) => {
  return (
    <Wrapper animation={animation}>
      <div className={`${styles.heading} mb-4 `}>
        <p className="p1 fw-bold text-center text-pink">OUR TEAM</p>
        <h3 className="H3 text-center t-primary ">Anagha Softech Team</h3>
        <p className="p-xl text-grey text-center">
          Expert professionals, passionate about shaping the future of
          technology.
        </p>
      </div>

      <div
        className={`${styles.tabs} d-flex align-items-center justify-content-center gap-2`}
      >
        <Button className="bg-blue">Design</Button>
        <Button className="transparent">Marketing</Button>
        <Button className="transparent">Manager</Button>
        <Button className="transparent">Sale</Button>
      </div>

      <div className={`${styles.cards} mt-5`}>
        <Carousel items={4} scroll={1}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>

      <div className="d-flex justify-content-center mt-5 pt-4">
        <Button flex className="bg-blue">
          Lets Talk{" "}
          <HiOutlineArrowRight className="ms-2" color="fff" size={20} />
        </Button>
      </div>
    </Wrapper>
  );
};

export default OurTeam;

const Card = () => {
  return (
    <div
      className={`${styles.card} d-flex flex-column align-items-center gap-2`}
    >
      <Image src={TEAMIMG} alt="" />
      <h6 className="H8 text-center t-dark">Jane Cooper</h6>
      <p className="p3 text-center text-grey">Business Analytic</p>
      <Image src={LINKEDIN} alt="" />
    </div>
  );
};
