/* eslint-disable react/prop-types */
import React from "react";

import styles from "./index.module.css";

import MEDALICON from "../../../assets/icons/medal.svg";
import DOWNLOADICON from "../../../assets/icons/download.svg";
import STOPWATCHICON from "../../../assets/icons/stopwatch.svg";
import WHISTLEICON from "../../../assets/icons/whistle.svg";
import CONNECTLINEICON from "../../../assets/icons/connect_line.svg";
import { Image } from "react-bootstrap";

const data = [
  {
    icon: DOWNLOADICON,
    title: "Competitive Pricing",
    description:
      "We understand that every business has a budget, and we strive to provide cost-effective solutions that fit your budget without compromising quality.",
  },
  {
    icon: WHISTLEICON,
    title: "Strong Track Record",
    description:
      "We have been in the industry for almost a decade and have worked with various clients. Our track record of delivering quality work on time speaks for itself.",
  },
  {
    icon: MEDALICON,
    title: "Experienced Team",
    description:
      "Our team consists of experienced professionals in their respective fields. We are passionate about innovation and stay up-to-date with the latest trends and technologies.",
  },
  {
    icon: STOPWATCHICON,
    title: "Exceptional Customer Service",
    description:
      "Our clients are our top priority, and we pride ourselves on providing exceptional customer service. We work closely with our clients to ensure that their needs are met.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className={`${styles.container} section-padding mt-5`}>
      <div
        className={`${styles.heading} d-flex align-items-center flex-column`}
      >
        <p className="p3 fw-bold text-pink">REASONS BEHIND OUR SUCCESS</p>
        <h3 className="H3 t-primary  text-center">Why Choose Us?</h3>
      </div>

      <div
        className={`${styles.cards} d-flex justify-content-center align-items-center gap-5`}
      >
        {data.map((item, id) => (
          <>
            <Card
              description={item.description}
              key={id}
              icon={item.icon}
              title={item.title}
            />
            <span className={styles["connect-line"]}>
                <Image src={CONNECTLINEICON} alt="" />
            </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

const Card = ({ description, icon, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <Image src={icon} alt="" />
      </div>
      <div className={`${styles.description} mt-5`}>
        <h6 className="H6 mb-3">{title}</h6>
        <p className="para-text mb-5">{description}</p>
      </div>
    </div>
  );
};
