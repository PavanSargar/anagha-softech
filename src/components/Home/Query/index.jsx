/* eslint-disable react/prop-types */
import React from "react";

import { Col, Row } from "react-bootstrap";

import styles from "./index.module.css";
import DropAQueryForm from "../../DropAQueryForm";
import Wrapper from "../../../libs/Wrapper";

const Query = ({animation}) => {
  return (
    <div data-aos={animation} className={styles.container}>
      <Wrapper>
        <Row className="py-5 align-items-center">
          <Col sm={12} md={6}>
            <p className="p3 fw-bold text-pink">WE ARE HERE TO SUPPORT YOU</p>
            <h3 className="H3 section-heading mb-4 t-primary w-100">
              Having a Query?
            </h3>
            <p className="mb-4 p1 text-grey w-75">
              We have a dedicated team to respond and work on all the queries.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <DropAQueryForm />
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Query;
