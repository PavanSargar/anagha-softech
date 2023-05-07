/* eslint-disable react/no-unescaped-entities */
import React from "react";

import styles from "./index.module.css";
import Wrapper from "../../../libs/Wrapper";
import Button from "../../../libs/Button/Button";
import { Col, Image, Row } from "react-bootstrap";

import BANNER from "../../../assets/images/about-banner.png";
import DOWNLOADICON from "../../../assets/icons/download.svg";

const HeroAbout = () => {
  return (
    <>
      <Wrapper>
        <div className={`${styles.container} mt-4`}>
          <div className={`${styles.heading}`}>
            <p className="p1 fw-bold text-pink">ABOUT US</p>
            <h3 className="H2 t-dark ">
              Empowering businesses through innovative technology solutions.
            </h3>
          </div>{" "}
        </div>
      </Wrapper>

      <div className={`${styles.banner}`}>
        <Image src={BANNER} alt="" />
      </div>

      <Wrapper className="">
        <Row className="gap-">
          <Col md={3} xs={12}>
            <h5 className="H5 t-primary">— Our Brand Story</h5>
          </Col>
          <Col md={8} xs={12}>
            <p className="text-grey p-lg">
              Established in 2010, Anagha Softech brings together a team of
              dedicated and passionate tech professionals committed to
              delivering groundbreaking solutions for clients worldwide. Our
              unique combination of exceptional on-shore and off-shore resources
              emphasizes meeting today's businesses' intricate needs.
              <div className="mb-2" />
              Over the years, we have built a strong reputation for consistently
              delivering results and driving innovation, which has propelled our
              transformation into a trusted technology partner. By focusing on
              accelerating project turnarounds and providing superior-quality
              solutions, we continue to significantly impact various industries,
              helping businesses navigate the rapidly evolving digital landscape
              and achieve long-lasting success.
            </p>
            <Button fixed className="bg-blue">
              {/* <Image src={DOWNLOADICON} /> */}
              Download Software Bouchar
            </Button>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default HeroAbout;
