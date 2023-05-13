/* eslint-disable react/prop-types */
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import Button from "../../../libs/Button/Button";

import USERICON from "../../../assets/icons/user.svg";
import AVATARICON from "../../../assets/icons/small-avatar.svg";
import CODEICON from "../../../assets/icons/code.svg";
import CASTICON from "../../../assets/icons/cast.svg";
import HEROIMG from "../../../assets/images/hero-image.svg";

import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = ({ animation }) => {
  return (
    <div data-aos={animation} className={`${styles.container}   `}>
      <Row className="d-flex align-items-center">
        <Col md={6} sm={12} className={`${styles.left} section-padding-left`}>
          <p className={styles["sub-title"]}>
            End-to-End IT Services for Your Business
          </p>
          <h2 className="H2 mb-4">
            Driving Digital Transformation with Tailored Solutions
          </h2>
          <p>
            Bridge the gap between modern IT solutions and your business
            requirements. From web and mobile app development to cybersecurity
            and staffing solutions, we offer end-to-end IT services that will
            help your business thrive.
          </p>
          <div className="d-flex align-items-center gap-2 mt-4">
            <Link to="/our-services">
              <Button className="bg-blue">Know more</Button>
            </Link>
            <Link to="/portfolio">
              <Button className="border">Portfolio</Button>
            </Link>
          </div>
        </Col>
        <Col md={6} sm={12} className={`${styles.right}`}>
        <Image src={HEROIMG} alt="" fluid />
        </Col>
      </Row>
      <Row className="section-padding ">
        <div
          className={`${styles["overview-components"]} d-flex align-items-center gap-5 mt-5 flex-wrap`}
        >
          <Overview
            icon={USERICON}
            title="Happy Users"
            description="Helping businesses satisfy their digital requirements and serve their customers"
            num="1m"
          />
          <Overview
            icon={CASTICON}
            title="Digital Transmission"
            description="Leveraging the latest technology and infrastructure to provide a seamless digital experience"
            num="1.2m"
          />
          <Overview
            icon={AVATARICON}
            title="Clients"
            description="Diverse clients from various industries, including healthcare, education, and finance"
            num="50+"
          />
          <Overview
            icon={CODEICON}
            title="Application Developed"
            description="Numerous cutting-edge web and mobile applications delivered"
            num="900k+"
          />
        </div>
      </Row>
    </div>
  );
};

export default Hero;

const Overview = ({ num, title, description, icon }) => {
  return (
    <div className={styles.overview}>
      <span className="">
        <Image src={icon} alt="" />
      </span>
      <h2 className="H2 fw-bold mt-5 mb-3">{num}</h2>
      <div className={styles["h-rule"]} />
      <h6 className="H6 mt-3">{title}</h6>
      <p className="mt-3">{description}</p>
    </div>
  );
};
