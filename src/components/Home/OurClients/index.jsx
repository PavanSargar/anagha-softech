/* eslint-disable react/prop-types */
import React from "react";

import styles from "./index.module.css";

import LOGO1 from "../../../assets/dummyLogos/1.png";
import LOGO2 from "../../../assets/dummyLogos/2.png";
import LOGO3 from "../../../assets/dummyLogos/3.png";
import LOGO4 from "../../../assets/dummyLogos/4.png";
import LOGO5 from "../../../assets/dummyLogos/5.png";
import LOGO6 from "../../../assets/dummyLogos/ace-auto-products-logo.png";
import LOGO7 from "../../../assets/dummyLogos/bired.png";
import LOGO8 from "../../../assets/dummyLogos/crest-oil.png";
import LOGO9 from "../../../assets/dummyLogos/mulugulogo.jpg";
import LOGO10 from "../../../assets/dummyLogos/mgcancerhospital-logo.png";
import LOGO11 from "../../../assets/dummyLogos/ruptechcorp-logo.png";
import LOGO12 from "../../../assets/dummyLogos/yv-reddy-logo.png";
import LOGO13 from "../../../assets/dummyLogos/equax-software-labs.png";
import LOGO14 from "../../../assets/dummyLogos/greater-washington-telugu-cultural-association-logo.pngv_.png";
import LOGO15 from "../../../assets/dummyLogos/iVIS-Cameras-2.png";
import LOGO16 from "../../../assets/dummyLogos/Kameshwari-Vydic-Services-logo-1.png";
import LOGO17 from "../../../assets/dummyLogos/kfin-tech.png";
import LOGO18 from "../../../assets/dummyLogos/logo-eptri-2.png";
import LOGO19 from "../../../assets/dummyLogos/logo-siddi-2.png";
import LOGO20 from "../../../assets/dummyLogos/siliconandhra-1.png";
import LOGO21 from "../../../assets/dummyLogos/skill-invention-2.png";
import LOGO22 from "../../../assets/dummyLogos/snr-e-datas.png";
import LOGO23 from "../../../assets/dummyLogos/sunshine-logo-2.png";
import LOGO24 from "../../../assets/dummyLogos/terbium-tech.png";
import LOGO25 from "../../../assets/dummyLogos/truviq-systems.png";
import LOGO26 from "../../../assets/dummyLogos/vrit-technosoft.png";

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

      {/* <div
        className={`${styles.clients} ${styles.desktop} gap-5 mt-5 d-flex align-items-center justify-content-center `}
      >
        <Image src={LOGO1} alt="" />
        <Image src={LOGO2} alt="" />
        <Image src={LOGO3} alt="" />
        <Image src={LOGO4} alt="" />
        <Image src={LOGO5} alt="" />
      </div> */}

      <div className={` mobile__slick-slide `}>
        <Carousel autoplaySpeed={1000} autoScroll items={5} scroll={1}>
          <Image className="mb-5" src={LOGO1} alt="" />
          <Image className="mb-5" src={LOGO2} alt="" />
          <Image className="mb-5" src={LOGO3} alt="" />
          <Image className="mb-5" src={LOGO4} alt="" />
          <Image className="mb-5" src={LOGO5} alt="" />
          <Image className="mb-5" src={LOGO6} alt="" />
          <Image className="mb-5" src={LOGO7} alt="" />
          <Image className="mb-5" src={LOGO8} alt="" />
          <Image className="mb-5" src={LOGO9} alt="" />
          <Image className="mb-5" src={LOGO10} alt="" />
          <Image className="mb-5" src={LOGO11} alt="" />
          <Image className="mb-5" src={LOGO12} alt="" />
          <Image className="mb-5" src={LOGO13} alt="" />
          <Image className="mb-5" src={LOGO14} alt="" />
          <Image className="mb-5" src={LOGO15} alt="" />
          <Image className="mb-5" src={LOGO16} alt="" />
          <Image className="mb-5" src={LOGO17} alt="" />
          <Image className="mb-5" src={LOGO18} alt="" />
          <Image className="mb-5" src={LOGO19} alt="" />
          <Image className="mb-5" src={LOGO20} alt="" />
          <Image className="mb-5" src={LOGO21} alt="" />
          <Image className="mb-5" src={LOGO22} alt="" />
          <Image className="mb-5" src={LOGO23} alt="" />
          <Image className="mb-5" src={LOGO24} alt="" />
          <Image className="mb-5" src={LOGO25} alt="" />
          <Image className="mb-5" src={LOGO26} alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default OurClients;
