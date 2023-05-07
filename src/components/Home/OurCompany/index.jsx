import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import IMAGE from "../../../assets/images/company.png";

import styles from "./index.module.css";

const OurCompany = () => {
  return (
    <div className={`${styles.container} mt-5`}>
      <Row className="section-padding gap-3 py-5">
        <Col className={styles["desktop"]} md={4} sm={12}>
          <Image className="fluid" src={IMAGE} alt="" />
        </Col>
        <Col>
          <p className="p3 fw-bold text-pink">OUR COMPANY</p>
          <h3 className="H3 section-heading mb-4 t-primary w-100">
            Connecting Businesses with Modern Tech
          </h3>
          <p className="mb-4 p1 text-grey w-75">
            We take pride in offering end-to-end IT services that are tailored
            to meet the unique needs of each of our clients. Our team of experts
            is dedicated to delivering high-quality, cost-effective solutions
            that help our clients achieve their business goals. Learn more about
            our company and how we can help your business grow.
          </p>
        </Col>
        <Col className={styles["mobile"]} sm={12}>
          <Image src={IMAGE} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default OurCompany;
