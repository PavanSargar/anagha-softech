/* eslint-disable react/prop-types */
import React from "react";

import styles from "./index.module.css";
import Wrapper from "../../../libs/Wrapper";
import Button from "../../../libs/Button/Button";

import IMAGEFRAME from "../../../assets/images/image-frame.png";
import { Carousel, Image } from "react-bootstrap";

const OurGallery = ({ animation }) => {
  return (
    <div data-aos={animation} className={`${styles.container}`}>
      <Wrapper>
        <div
          className={`${styles.heading} d-flex align-items-center flex-column`}
        >
          <p className="p3 fw-bold tex-center text-pink">OUR GALLERY</p>

          <h3 className="H3 text-center t-primary mb-2">
            Have a look at our work
          </h3>
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
            className={`${styles.images} ${styles.desktop} flex-wrap justify-content-center mt-5 d-flex align-items-center gap-1`}
          >
            <Image
              src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <Image
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <div className={`${styles.images} ${styles.mobile} mt-4`}>
            <Carousel controls={true} indicators={true}>
              <Carousel.Item interval={2000}>
                <Image
                  fluid
                  src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image
                  fluid
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image
                  fluid
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurGallery;
