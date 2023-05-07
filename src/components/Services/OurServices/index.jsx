/* eslint-disable react/prop-types */
import React from "react";
import Wrapper from "../../../libs/Wrapper";
import { Image } from "react-bootstrap";
import USERICON from "../../../assets/icons/user.svg";
import Button from "../../../libs/Button/Button";

import styles from "./index.module.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <Wrapper>
      <div className={`${styles.services}`}>
        <div
          className={`${styles["service-heading"]} mb-5 d-flex align-items-start justify-content-between`}
        >
          <h3 className="H3 t-primary ">Our Services</h3>
          <div className={`${styles.description}`}>
            <h5 className="H5 t-primary">— We worked with</h5>
            <p className="  para-text w-75">
              Explore our diverse range of tailored services designed to propel
              your business forward in the digital age.
            </p>
          </div>
        </div>

        <div
          className={`${styles.services} d-flex align-items-center  gap-5 flex-wrap`}
        >
          <Card
            title={`Web Development`}
            description={`Transform your online presence with intuitive and engaging websites, expertly designed with seamless front-end and robust back-end development, ensuring a captivating user experience and efficient functionality.`}
          />
          <Card
            title={`Mobile App Development`}
            description={`Bring your ideas to life with cutting-edge mobile applications that cater to your target audience. We create user-friendly, feature-rich apps for iOS and Android to drive engagement and deliver results.`}
          />
          <Card
            title={`Cyber Security `}
            description={`Safeguard your valuable data and digital assets with our comprehensive cybersecurity services. Our team of experts helps you identify vulnerabilities, implement robust security measures, and maintain a secure digital environment.`}
          />
          <Card
            title={`Staffing Solutions`}
            description={`Optimize your workforce with our tailored staffing solutions. We connect you with the right talent, streamlining your recruitment process and ensuring your team has the skills to drive your business forward.`}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurServices;

const Card = ({ title, description }) => {
  return (
    <div className={`${styles.card}`}>
      <Image className="mb-4" src={USERICON} alt="" />
      <h6 className="H6 mb-4">{title}</h6>
      <p className="text-grey p2">{description}</p>
      <Link to={`/service/${title.split(" ").join("-").toLowerCase()}`}>
        <Button className="hover-blue">Know More</Button>
      </Link>
    </div>
  );
};
