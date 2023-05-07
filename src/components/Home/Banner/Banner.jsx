import React from "react";
import BANNERIMG from "../../../assets/images/hero-banner.svg";
import { Image } from "react-bootstrap";

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="H2">Elevating Your Digital Transmission Strategy with Finesse</h2>
        <div className={styles["hr"]} />
      </div>
      <Image src={BANNERIMG} alt="" />
    </div>
  );
};

export default Banner;
