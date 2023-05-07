/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Image } from "react-bootstrap";

import Button from "../../../libs/Button/Button";
import IMAGE from "../../../assets/images/service-area.svg";

import styles from "./index.module.css";

const ServiceArea = () => {
  return (
    <div className={`${styles.container} section-padding mt-5`}>
      <div
        className={`${styles.heading} d-flex flex-column align-items-center justify-content-center`}
      >
        <p className="p3 fw-bold text-pink text-center">SERVICE AREA</p>
        <h3 className="H3 section-heading t-primary w-75 text-center">
          Industries we serve
        </h3>
        <p className="mb-4 p-xl text-center text-grey">
          We understand each industry's unique challenges and work with our
          clients to deliver tailor-made solutions that drive growth and
          success. Explore our services to see how we can help your business
          thrive.
        </p>
        <Button className="bg-blue">Know More</Button>
      </div>
      <div
        className={`${styles.image} d-flex align-items-center justify-content-center `}
      >
        <Image src={IMAGE} alt="" />
      </div>
    </div>
  );
};

export default ServiceArea;
