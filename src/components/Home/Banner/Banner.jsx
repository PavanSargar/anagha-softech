import React from "react";
import BANNERIMG from "../../../assets/images/hero-banner.svg";
import BANNERIMG2 from "../../../assets/images/slider-2.png";
import BANNERIMG3 from "../../../assets/images/slider-3.png";

import { Image } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <div className={styles.title}>
            <h2 className="H2">
              Elevating Your Digital Transmission Strategy with Finesse
            </h2>
            <div className={styles["hr"]} />
          </div>
          <Image src={BANNERIMG} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className={styles.title}>
            <h2 className="H2">
              Innovating people focused techno-rich framework{" "}
            </h2>
            <div className={styles["hr"]} />
          </div>
          <Image src={BANNERIMG2} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className={styles.title}>
            <h2 className="H2">
              Experience Technology driven business transition!{" "}
            </h2>
            <div className={styles["hr"]} />
          </div>
          <Image src={BANNERIMG3} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
