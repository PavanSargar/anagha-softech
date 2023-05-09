/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Wrapper from "../../../libs/Wrapper";
import { Image } from "react-bootstrap";
import SERVICEIMG from "../../../assets/images/service-banner.png";

import styles from "./index.module.css";

const HeroPortfolio = ({ animation }) => {
  return (
    <Wrapper animation={animation}>
      <div
        className={`${styles.container} mt-5 d-flex align-items-center  justify-content-between`}
      >
        <div className={`${styles.heading} mb-4 `}>
          <p className="p1 fw-bold  text-pink">ABOUT OUR SERVICES</p>
          <h3 className="H2 t-primary w-75 mb-4 ">
            Blending Technology with Creativity
          </h3>
          <p className="p-lg text-grey w-75 ">
            Anagha Softech's portfolio showcases our dedication to creating
            exceptional digital experiences through innovative web and mobile
            app development, cybersecurity, and staffing solutions. Explore our
            diverse projects and discover how we have helped businesses across
            various industries thrive in the digital era.
          </p>
        </div>

        <div className={`${styles.image}`}>
          <Image src={SERVICEIMG} alt="" />
        </div>
      </div>

      <div
        className={`${styles["ourportfolio"]} mt-5 pt-5 d-flex gap-5 align-items-start justify-content-center`}
      >
        <h3 className="H3 t-primary w-100 ">Our Portfolio</h3>
        <div className={`${styles.description}`}>
          {/* <h5 className="H5 t-primary">— We worked with</h5> */}
          <p className="p1 text-grey w-100">
            Our extensive portfolio highlights our innovative solutions for
            clients across various sectors, including healthcare, education,
            finance, and more. Witness the transformative power of our
            tailor-made services and see how we've enabled businesses to achieve
            their goals and excel in the digital age.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroPortfolio;
