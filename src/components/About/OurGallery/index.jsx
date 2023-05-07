import React from "react";

import styles from "./index.module.css";
import Wrapper from "../../../libs/Wrapper";
import Button from "../../../libs/Button/Button";

import IMAGEFRAME from "../../../assets/images/image-frame.png";
import { Image } from "react-bootstrap";

const OurGallery = () => {
  return (
    <div className={`${styles.container}`}>
      <Wrapper>
        <div
          className={`${styles.heading} d-flex align-items-center flex-column`}
        >
          <p className="p3 fw-bold tex-center text-pink">OUR GALLERY</p>

          <h3 className="H3 text-center t-primary mb-2">Have a look at our work</h3>
          <p className="p-1 mb-4 text-center text-grey w-75 ">
            Explore the transformative power of our technology solutions.
          </p>

          <div
            className={`${styles.tabs} d-flex align-items-center justify-content-center gap-2`}
          >
            <Button className="bg-blue">Design</Button>
            <Button className="transparent">Marketing</Button>
            <Button className="transparent">Manager</Button>
            <Button className="transparent">Sale</Button>
          </div>

          <div
            className={`${styles.images} flex-wrap justify-content-center mt-5 d-flex align-items-center gap-1`}
          >
            <Image src={IMAGEFRAME} alt="" />
            <Image src={IMAGEFRAME} alt="" />
            <Image src={IMAGEFRAME} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurGallery;
