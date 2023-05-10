/* eslint-disable react/prop-types */
import React from "react";

import styles from "./index.module.css";

import LOGO1 from "../../../assets/dummyLogos/1.svg";
import LOGO2 from "../../../assets/dummyLogos/2.svg";
import LOGO3 from "../../../assets/dummyLogos/3.svg";
import LOGO4 from "../../../assets/dummyLogos/4.svg";
import LOGO5 from "../../../assets/dummyLogos/5.svg";
import { Image } from "react-bootstrap";
import Carousel from "../../Slider";

const OurClients = ({ animation }) => {
  return (
    <div
      data-aos={animation}
      className={`${styles.container} section-padding mt-5`}
    >
      <div
        className={`${styles.heading} d-flex align-items-start justify-content-between`}
      >
        <h3 className="H3 t-primary ">Our Clients</h3>
        <div className={styles.description}>
          <h5 className="H5 t-primary">— We worked with</h5>
          <p className="mb-5 para-text">
            We understand that every business is unique, so our tailored IT
            solutions deliver best-in-class solutions for our clientele.
          </p>
        </div>
      </div>

      <div
        className={`${styles.clients} ${styles.desktop} mt-5 d-flex align-items-center justify-content-center `}
      >
        <Image src={LOGO1} alt="" />
        <Image src={LOGO2} alt="" />
        <Image src={LOGO3} alt="" />
        <Image src={LOGO4} alt="" />
        <Image src={LOGO5} alt="" />
      </div>

      <div className={`${styles.mobile} mobile__slick-slide `}>
        <Carousel items={1} scroll={1}>
          <Image src={LOGO1} alt="" />
          <Image src={LOGO2} alt="" />
          <Image src={LOGO3} alt="" />
          <Image src={LOGO4} alt="" />
          <Image src={LOGO5} alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default OurClients;
