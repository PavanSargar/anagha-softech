/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import Wrapper from "../../libs/Wrapper/index";

import USERICON from "../../assets/inputIcons/user.svg";
import PHONEICON from "../../assets/inputIcons/phone.svg";
import EMAILICON from "../../assets/inputIcons/email.svg";
import FLAGICON from "../../assets/inputIcons/flag.svg";
import EDITICON from "../../assets/inputIcons/edit.svg";
import SENDICON from "../../assets/inputIcons/send-icon.svg";
import SENDFILLED from "../../assets/inputIcons/send-filled.svg";

import Button from "../../libs/Button/Button";

import { FiPhone } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { RiFacebookCircleLine, RiBehanceLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { BsInstagram, BsDribbble } from "react-icons/bs";
import Newsletter from "../../components/Newsletter/index";

import styles from "./index.module.css";
import { Col, Image, Row } from "react-bootstrap";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleService = (service) => {
    setSelectedService(service);
  };

  return (
    <div className={`${styles.container}`}>
      <Wrapper>
        <div className={`${styles.heading} mb-4 `}>
          <p className="p1 fw-bold  text-center text-pink">CONTACT US</p>
          <h3 className="H2 text-center t-dark mb-4 ">
            Have a project in mind? Say hi! 👋
          </h3>
        </div>
      </Wrapper>

      <Row
        className={`${styles.contact} d-flex align-items-start justify-content-between`}
      >
        <Col sm={12} md={6}>
          <h6 className="H6 fw-bold">Select Services</h6>
          <p className="text-grey H8">
            Amet minim mollit non deserunt ullamco est.
          </p>

          <div
            className={`${styles["service-cards"]} d-flex align-items-center flex-wrap gap-3`}
          >
            <Card
              selectedService={selectedService}
              onClick={handleService}
              active
              title="Mobile App Design & Development"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="Digital Marketing Services"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="Artificial Intelligence"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="Website Design & Development"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="Other"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="UI and UX Design"
            />
            <Card
              selectedService={selectedService}
              onClick={handleService}
              title="E-commerce Development"
            />
          </div>
        </Col>

        <Col sm={12} md={6} className={`${styles.form}`}>
          <h6 className="H6 t-dark mb-4">Drop your query</h6>

          <div className={`d-flex align-items-center justify-content-between`}>
            <FormInput type="text" placeholder="Enter Name" icon={USERICON} />
            <FormInput
              type="number"
              placeholder="Enter Phone"
              icon={PHONEICON}
            />
          </div>
          <FormInput
            type="email"
            placeholder="Enter email address"
            icon={EMAILICON}
          />
          <FormInput
            type="text"
            placeholder="Enter company name"
            icon={FLAGICON}
          />
          <FormInput
            textarea
            type="text"
            placeholder="Write Something..."
            icon={EDITICON}
          />
          <Button className="bg-blue" fixed>
            <Image src={SENDICON} height={18} alt="" /> Submit Now
          </Button>
        </Col>
      </Row>

      <Wrapper>
        <Row>
          <Col>
            <div className="d-flex align-items-start">
              <div>
                <div className={`${styles["address-card"]}`}>
                  <BiHome classname="" size={25} color="#C701FF" />
                  <h6 className="p1 mt-2  t-dark fw-bold">Address</h6>
                  <p className="p2 text-grey">
                    897 Jonathon Field <br /> Boganburgh
                  </p>
                </div>
                <div className={`${styles["address-card"]} mt-4`}>
                  <IoMailOutline classname="" size={25} color="#C701FF" />
                  <h6 className="p1 t-dark mt-2  fw-bold">Email</h6>
                  <p className="p2 text-grey">hello@anaghasoft.com.net</p>
                </div>
              </div>
              <div className={`${styles["address-card"]}`}>
                <FiPhone classname="" size={25} color="#C701FF" />
                <h6 className="p1  mt-2 t-dark fw-bold">Contact phone</h6>
                <p className="p2 text-grey">+987 654 321 0</p>
              </div>
            </div>
            <div
              className={`${styles["social-icons"]} mt-4 d-flex align-items-center gap-3`}
            >
              <RiFacebookCircleLine size={19} color="#777E90" />
              <TbBrandTwitter size={18} color="#777E90" />
              <BsInstagram color="#777E90" />
              <RiBehanceLine size={18} color="#777E90" />
              <BsDribbble color="#777E90" />
            </div>
            <button className={`${styles["direction-btn"]} mt-4`}>
              {" "}
              <Image height={15} className="me-1" src={SENDFILLED} alt="" /> Get
              direction
            </button>
          </Col>
          <Col></Col>
        </Row>
      </Wrapper>

      <Newsletter />
    </div>
  );
};

export default Contact;

const Card = ({ title, onClick, selectedService }) => {
  let isServiceActive = selectedService === title;
  return (
    <div
      onClick={() => onClick(title)}
      className={`${styles.card} ${isServiceActive && styles.active}`}
    >
      {title}
    </div>
  );
};

const FormInput = ({ type, placeholder, icon, textarea }) => {
  return (
    <div className={`${styles.input} d-flex align-items-start gap-3`}>
      <Image src={icon} alt="" />
      {textarea ? (
        <textarea type={type} placeholder={placeholder} rows={3} />
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
};
