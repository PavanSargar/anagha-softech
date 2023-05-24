import React from "react";

import Wrapper from "../../../libs/Wrapper";
import Card from "../../../libs/Card/Card";

import THUNDERICON from "../../../assets/icons/thunder.svg";
import USERICON from "../../../assets/icons/user.svg";

import styles from "./index.module.css";
import Carousel from "../../Slider";

const OurMission = () => {
  return (
    <Wrapper>
      <div
        className={`${styles.head} flex-column d-flex align-items-center justify-content-center`}
      >
        <p className="p1 fw-bold text-pink text-center">OUR</p>
        <h3 className="H3 text-center section-heading mb-4 t-primary w-100">
          Mission, Vision & Approach
        </h3>
        <p className="mb-4 p1 text-grey w-75 text-center">
          Our holistic approach combines creativity, collaboration, and
          expertise, enabling us to step towards a world where technology is
          seamlessly integrated into every business aspect.
        </p>
      </div>

      <div
        className={`${styles.cards} ${styles.desktop} mt-4 d-flex align-items-center gap-5 flex-wrap justify-content-center`}
      >
        <Card
          center
          // fixed
          title="Our Vision"
          description="Our vision is to empower businesses with innovative and reliable IT solutions to help them thrive in the digital age. We strive towards becoming a leading provider of end-to-end IT services that exceed our client's expectations."
          type
          icon={USERICON}
        />
        <Card
          center
          // fixed
          title="Our Mission"
          description="Our mission is to deliver customized, cost-effective IT solutions that drive business growth and success. We focus on staying at the forefront of technology trends and developments to offer our clients the latest and most effective solutions."
          type
          icon={THUNDERICON}
        />
        <Card
          // fixed
          center
          title="Our Motto"
          description="We work closely with our clients to understand their unique needs and goals and tailor our solutions accordingly. We adopt an agile development and project management approach, allowing us to adapt to changes and deliver high-quality results quickly."
          type
          icon={USERICON}
        />
      </div>

      <div className={`${styles.cards} ${styles.mobile} card__gap-slick mt-4`}>
        <Carousel indicator items={1} scroll={1}>
          <Card
            center
            // fixed
            title="Our Vision"
            description="Our vision is to empower businesses with innovative and reliable IT solutions to help them thrive in the digital age. We strive towards becoming a leading provider of end-to-end IT services that exceed our client's expectations."
            type
            icon={USERICON}
          />
          <Card
            center
            // fixed
            title="Our Mission"
            description="Our mission is to deliver customized, cost-effective IT solutions that drive business growth and success. We focus on staying at the forefront of technology trends and developments to offer our clients the latest and most effective solutions."
            type
            icon={THUNDERICON}
          />
          <Card
            // fixed
            center
            title="Our Motto"
            description="We work closely with our clients to understand their unique needs and goals and tailor our solutions accordingly. We adopt an agile development and project management approach, allowing us to adapt to changes and deliver high-quality results quickly."
            type
            icon={USERICON}
          />
        </Carousel>
      </div>
    </Wrapper>
  );
};

export default OurMission;
