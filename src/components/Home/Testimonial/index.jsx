/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import styles from "./index.module.css";

import LOGO from "../../../assets/dummyLogos/3.svg";
import QUOTEICON from "../../../assets/icons/quotes.svg";
import USER from "../../../assets/images/user.svg";

import Carousel from "../../../components/Slider/index";

import { Image } from "react-bootstrap";

const data = [
  {
    review: `Anagha Softech has been our go-to IT partner for the last 3 years. Their expertise in mobile app development has helped us grow our business and reach a wider audience. Their team is highly professional and always delivers on time.`,
    name: `John Smith`,
    company: `CEO of XYZ Company`,
    role: "CEO",
    isActive: true,
  },
  {
    review: `We have been working with Anagha Softech for our cybersecurity needs, and they have exceeded our expectations. Their SIEM and vulnerability assessment services have helped us stay ahead of the curve and protect our data from cyber threats`,
    name: `Sarah Jones`,
    company: `IT Director at ABC Corporation`,
    role: "IT Director",
    isActive: false,
  },
  {
    review: `Anagha Softech has helped us streamline our HR processes and make hiring easier. Their staffing solutions have saved us time and money and allowed us to focus on growing our business.`,
    name: `David Lee`,
    company: `HR Manager at LMN Enterprises`,
    role: "HR Manager",
    isActive: false,
  },
  {
    review: `We approached Anagha Softech for a product development project and were impressed with their attention to detail and customer-centric approach. Their team worked closely with us to deliver a high-quality product that exceeded our expectations.`,
    name: `Jane Doe`,
    company: `COO at PQR Innovations`,
    role: "COO",
    isActive: false,
  },
];

const Testimonials = ({ animation }) => {
  const [currentActive, setCurrentActive] = useState("John Smith");

  const selectedReview = data.filter((item) => {
    return item.name === currentActive;
  });

  return (
    <div data-aos={animation} className={`${styles.container} section-padding mt-5`}>
      <div
        className={`${styles.heading} d-flex flex-column align-items-center justify-content-center`}
      >
        <p className="p3 fw-bold text-pink text-center">Testimonial</p>
        <h3 className="H3 section-heading t-primary w-75 text-center">
          Don’t Just Trust Our Word. Look What Our Customers Say About Our
          Solutions
        </h3>
        <p
          className={`${styles.description} w-75 text-center p-xl text-grey mt-4`}
        >
          Our clients are at the heart of everything we do, and their
          satisfaction is our top priority. See what they have to say about our
          services and how we have helped their businesses grow and succeed.
        </p>
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <Image src={LOGO} alt="" />
        </div>
      </div>

      <div className={`${styles.reviews} mt-5 h-50`}>
        <p className="p-xl text-center t-primary">
          "{selectedReview[0]?.review}"
        </p>
        <span className="mt-3 d-flex align-items-center justify-content-center">
          <Image className="mb-3" src={QUOTEICON} alt="" />
          <p className="p-2 t-bold t-primary">{selectedReview[0]?.name}</p>{" "}
          <p>|</p>
          <p className="p-2 text-grey">{selectedReview[0]?.company}</p>
        </span>

        <div className={`${styles["review-cards"]} mt-4  gap-5`}>
          {data.map((item, i) => (
            <ReviewCard
              onClick={() => setCurrentActive(item.name)}
              name={item.name}
              company={item.role}
              key={i}
              isActive={currentActive === item.name}
            />
          ))}
        </div>
      </div>

      <div className={`${styles.slider}`}>
        <Carousel indicator items={4} scroll={1}>
          {data.map((item, i) => (
            <div className="mt-5 h-50" key={i}>
              <p className="p-xl text-center t-primary">
                "{data[i]?.review}"
              </p>
              <span className="mt-3 d-flex align-items-center justify-content-center">
                <Image className="mb-3" src={QUOTEICON} alt="" />
                <p className="p2 mx-2 t-bold t-primary">
                  {data[i]?.name}
                </p>{" "}
                <p>|</p>
                <p className="p2 ms-2 text-grey">{data[i]?.company}</p>
              </span>
              <ReviewCard
                onClick={() => setCurrentActive(item.name)}
                name={item.name}
                company={item.role}
                isActive={currentActive === item.name}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

const ReviewCard = ({ isActive, company, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.card} ${
        isActive && styles.active
      } d-flex align-items-center gap-2`}
    >
      <Image src={USER} alt="" />
      <div
        className={`${styles["details"]} d-flex align-items-start flex-column`}
      >
        <p className="p2 t-bold t-primary">{name}</p>
        <p className="p3 text-grey">{company}</p>
      </div>
    </div>
  );
};
