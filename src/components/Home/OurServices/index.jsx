/* eslint-disable react/prop-types */
import React from "react";

import Card from "../../../libs/Card/Card";
import AVATAR from "../../../assets/icons/user.svg";
import THUNDER from "../../../assets/icons/thunder.svg";
import BADGE from "../../../assets/icons/badge.svg";
import Carousel from "../../Slider";

import styles from "./OurServices.module.css";

const OurServices = ({ animation }) => {
  return (
    <div
      data-aos={animation}
      className={`${styles.container} section-padding mt-5`}
    >
      <div
        className={`${styles.heading} d-flex align-items-center flex-column`}
      >
        <p className="p3 fw-bold text-pink">OUR SERVICES</p>
        <h3 className="H3 text-center t-primary ">
          Professional IT solutions that cater to every aspect of your business
          needs.
        </h3>
      </div>
      <div className={`${styles.cards} mt-5 `}>
        <Carousel indicator>
          <Card
            title="Application Development"
            description="From idea to launch, we work with you to create intuitive, feature-rich web or mobile applications that deliver exceptional user experience."
            link="/service/mobile-app-development"
            icon={AVATAR}
          />
          <Card
            title="Cybersecurity"
            description="Protect your sensitive data and keep your systems secure with our comprehensive cybersecurity services."
            link="/service/cyber-security-"
            icon={THUNDER}
          />
          <Card
            title="Product Development"
            description="Our team has experience creating products for various industries, & we use the latest technologies to ensure exceptional performance and user experience."
            link="/our-services"
            icon={BADGE}
          />
          <Card
            title="Application Development"
            description="From idea to launch, we work with you to create intuitive, feature-rich web or mobile applications that deliver exceptional user experience."
            link="/"
            icon={AVATAR}
          />
          <Card
            title="Cybersecurity"
            description="Protect your sensitive data and keep your systems secure with our comprehensive cybersecurity services."
            link="/"
            icon={THUNDER}
          />
          <Card
            title="Product Development"
            description="Our team has experience creating products for various industries, & we use the latest technologies to ensure exceptional performance and user experience."
            link="/our-services"
            icon={BADGE}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default OurServices;
