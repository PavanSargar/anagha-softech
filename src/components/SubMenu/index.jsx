/* eslint-disable react/prop-types */
import React from "react";

import { FiChevronDown } from "react-icons/fi";

import styles from "./index.module.css";
import { Col, Row } from "react-bootstrap";
import Button from "../../libs/Button/Button";
import { Link } from "react-router-dom";

const SubMenu = ({ active, closeSubMenu }) => {
  return (
    <div className={`${styles.container} ${active && styles.active}`}>
      <Row className="align-items-center justify-content-between">
        <Col className="" md={7}>
          <div className="d-flex align-items-center gap-4 mb-3">
            <Link
              onClick={() => closeSubMenu(true)}
              to="/service/staffing-solutions"
            >
              <Card title="Staffing Solutions" />
            </Link>
            <Link
              onClick={() => closeSubMenu(true)}
              to="/service/mobile-app-development"
            >
              <Card title="Mobile App Development" />
            </Link>
          </div>{" "}
          <div className="d-flex align-items-center gap-4 mb-3">
            <Link
              onClick={() => closeSubMenu(true)}
              to="service/cyber-security-"
            >
              <Card title="Cyber Security" />
            </Link>
            <Link onClick={() => closeSubMenu(true)} to="/our-services">
              <Card title="Product Development" />
            </Link>
          </div>{" "}
          <Link
            onClick={() => closeSubMenu(true)}
            to="/service/web-development"
          >
            <Card title="Web Application Development" />
          </Link>
        </Col>
        <Col md={5} className="">
          <h4 className="H4 text-left t-dark fw-bold mb-4">Our Services</h4>
          <p className={`${styles.description} text-grey mb-3`}>
            Anagha Softech aims to turn every business into a success story with
            a cost-effective, result-oriented, and success-driven approach. 🏀
          </p>
          <Link onClick={() => closeSubMenu()} to="/our-services">
            <Button className="bg-blue" fixed>
              Explore More
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default SubMenu;

const Card = ({ title }) => {
  return (
    <div className={`${styles.card}`}>
      <h6 className="p-lg t-dark fw-bold">{title}</h6>
      <p className="text-pink  fw-bold p1 mt-4">Explore More</p>
    </div>
  );
};
