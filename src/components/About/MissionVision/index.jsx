/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import MISSONIMG from "../../../assets/images/mission.svg";
import VISIONIMG from "../../../assets/images/vision.svg";
import MOTOIMG from "../../../assets/images/moto.svg";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";

const MissionVision = ({ animation }) => {
  return (
    <div data-aos={animation} className={`${styles.container}`}>
      <div
        className={`${styles.card} ${styles.pink} d-flex align-items-center `}
      >
        <Image src={MISSONIMG} alt="" />
        <div className={`${styles.description}`}>
          <h2 className="H2 t-dark mb-4">Our Mission</h2>
          <p className="text-grey p-xl">
            To design and deliver customized, high-impact technology solutions
            that propel businesses toward success and growth in a constantly
            evolving digital world. We are committed to understanding each
            client's unique needs and forging long-lasting partnerships built on
            trust, collaboration, and mutual growth.
          </p>
        </div>
      </div>

      <div
        className={`${styles.card} ${styles.green} d-flex align-items-center`}
      >
        <div className={`${styles.description}`}>
          <h2 className="H2 mb-4 t-dark">Our Vision</h2>
          <p className="text-grey p-xl">
            To establish ourselves as a globally recognized leader in end-to-end
            technology services, relentlessly empowering businesses to excel and
            maintain a competitive edge in the rapidly evolving digital
            landscape. We envision a future where our innovative, tailored
            solutions become the cornerstone for success across industries,
            fostering growth, and driving meaningful change.
          </p>
        </div>
        <Image src={VISIONIMG} alt="" />
      </div>

      <div
        className={`${styles.card} ${styles.blue} d-flex align-items-center`}
      >
        <Image src={MOTOIMG} alt="" />

        <div className={`${styles.description}`}>
          <h2 className="H2 mb-4 t-dark">Our Moto</h2>
          <p className="text-grey p-xl">
            Champion innovation, cultivate collaboration, and pursue excellence:
            By harnessing the power of customized technology solutions, we
            strive to transform businesses, empower them to conquer challenges,
            and unlock their full potential in the ever-changing digital
            landscape. Our unwavering commitment to delivering tailored services
            drives us to constantly evolve and adapt, ensuring our clients stay
            ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
