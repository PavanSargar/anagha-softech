/* eslint-disable react/prop-types */
import React from "react";

import styles from "./index.module.css";

import LOGO1 from "../../../assets/dummyLogos/1.png";
import LOGO2 from "../../../assets/dummyLogos/2.png";
import LOGO3 from "../../../assets/dummyLogos/3.png";
import LOGO4 from "../../../assets/dummyLogos/4.png";
import LOGO5 from "../../../assets/dummyLogos/5.png";
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
        className={`${styles.clients} ${styles.desktop} gap-5 mt-5 d-flex align-items-center justify-content-center `}
      >
        <Image src={LOGO1} alt="" />
        <Image src={LOGO2} alt="" />
        <Image src={LOGO3} alt="" />
        <Image src={LOGO4} alt="" />
        <Image src={LOGO5} alt="" />
      </div>

      <div className={`${styles.mobile} mobile__slick-slide `}>
        <Carousel indicator items={1} scroll={1}>
          <Image className="mb-5" src={LOGO1} alt="" />
          <Image className="mb-5" src={LOGO2} alt="" />
          <Image className="mb-5" src={LOGO3} alt="" />
          <Image className="mb-5" src={LOGO4} alt="" />
          <Image className="mb-5" src={LOGO5} alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default OurClients;
