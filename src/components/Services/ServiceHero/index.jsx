/* eslint-disable react/prop-types */
import React from "react";

import Wrapper from "../../../libs/Wrapper/index";
import { Image } from "react-bootstrap";
import SERVICEIMG from "../../../assets/images/service-banner.png";

import styles from "./index.module.css";

const ServiceHero = ({ animate }) => {
  return (
    <Wrapper animation={animate}>
      <div
        className={`${styles.container} mt-5 d-flex align-items-center gap-5 justify-content-between`}
      >
        <div className="">
          <div className={`${styles.heading} mb-4 `}>
            <p className="p1 fw-bold  text-pink">ABOUT OUR SERVICES</p>
            <h3 className="H2 t-primary ">
              Comprehensive Technology Solutions Tailored to Your Needs
            </h3>
            <p className="p-lg text-grey ">
              At Anagha Softech, we pride ourselves on providing various
              technology services crafted to meet your unique business
              requirements. From web and mobile app development to cybersecurity
              and staffing solutions, our dedicated professionals work
              tirelessly to ensure your business stays ahead in the digital
              world.
            </p>
          </div>
        </div>

        <div className={`${styles.image}`}>
          <Image src={SERVICEIMG} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceHero;
