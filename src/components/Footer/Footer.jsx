import React from "react";
import Wrapper from "../../libs/Wrapper";
import { Row, Col, Image } from "react-bootstrap";
import Button from "../../libs/Button/Button";
import LOGO from "../../assets/icons/logo-white.svg";
import EMAILICON from "../../assets/icons/email.svg";
import PHONEICON from "../../assets/icons/phone.svg";
import HOMEICON from "../../assets/icons/home.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container} py-2`}>
      <Wrapper>
        <Row className="flex-wrap">
          <Col md={3} sm={6} xs={12}>
            <Image className="mb-5" src={LOGO} alt="" />
            <p className="p-xl text-light mb-3">
              Let’s make a great things together
            </p>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={HOMEICON} alt="" />
              <p className="text-light p2">897 Jonathon Field, Boganburgh</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={PHONEICON} alt="" />
              <p className="text-light p2">+987 654 321 0</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={EMAILICON} alt="" />
              <p className="text-light p2">hello@ui8.net</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Services</h6>
            <ul className={`${styles.services}`}>
              <p>App Development</p>
              <br />
              <p>Cyber Security</p>
              <br />
              <p>Product Development</p>
              <br />
              <p>Digital Marketing</p>
              <br />
              <p>GIS Services</p>
              <br />
              <p>Stack Development</p>
              <br />
              <p>UI/UX Desingin</p>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Company</h6>
            <ul className={`${styles.services}`}>
              <p>About us</p>
              <br />
              <p>Careers</p>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Let’s get a call</h6>
            <div className={`${styles.form}`}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="email">EMAIL</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="PHONE">PHONE</label>
                <input
                  placeholder="Enter your email"
                  type="text"
                  name="PHONE"
                  id="PHONE"
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="date">TIME SLOT</label>
                <div className="d-flex align-items-center gap-2">
                  <input
                    // placeholder="Enter your email"
                    type="date"
                    name="start"
                    id="start"
                  />
                  <input
                    // placeholder="Enter your email"
                    type="date"
                    name="end"
                    id="end"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <button>Get a call back</button>
              </div>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Footer;
