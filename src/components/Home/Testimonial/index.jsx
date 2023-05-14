/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import styles from "./index.module.css";

import LOGO from "../../../assets/dummyLogos/3.png";
import QUOTEICON from "../../../assets/icons/quotes.svg";
import USER from "../../../assets/images/user.svg";

import BIRED from "../../../assets/dummyLogos/bired.png";
import CRESTOIL from "../../../assets/dummyLogos/crest-oil.png";
import RUPTECHCORP from "../../../assets/dummyLogos/ruptechcorp-logo.png";
import YVREDDY from "../../../assets/dummyLogos/yv-reddy-logo.png";
import ACE from "../../../assets/dummyLogos/ace-auto-products-logo.png";
import MULUGU from "../../../assets/dummyLogos/mulugulogo.jpg";
import MG from "../../../assets/dummyLogos/mgcancerhospital-logo.png";

import Carousel from "../../../components/Slider/index";

import { Image } from "react-bootstrap";

const data = [
  {
    review: `My experience with Anagha Softech has been fantastic. I know many web designing companies but these Anagha Softech Team guys are really passionate about work. They have presented my ideas on screen perfectly. I look forward to cope up with Anagha Softech for Many more projects!`,
    name: `AP Bired`,
    company: `AP Bired`,
    role: "Director",
    isActive: true,
    image: BIRED,
  },
  {
    review: `Anagha Softech professional and supportive throughout our dealing with them. They developed us a project in very quick time and gave us many good ideas during this project. We would have absolutely no hesitation in using their services again and recommending them to our other business associates.`,
    name: `Crest Oil`,
    company: `Crest Oil`,
    role: "Director",
    isActive: false,
    image: CRESTOIL,
  },
  {
    review: `Anagha Softech has shown great commitment and truly appreciate their dedicated work as a team and delivered excellent piece of work. I am very happy with the product and its ease of use. I highly recommend them and would be happy to work with them in our future projects…`,
    name: `Ramesh Uppalapati`,
    company: `RUP Tech Corp, USA`,
    role: "Director of Operations",
    isActive: false,
    image: RUPTECHCORP,
  },
  {
    review: `Anagha Softech has shown great commitment and truly appreciate their dedicated work as a team and delivered excellent piece of work. I am very happy with the product and its ease of use. I highly recommend them and would be happy to work with them in our future projects…`,
    name: `Dr. Y V Reddy`,
    company: `Reserve Bank of India`,
    role: "Former Governor",
    isActive: false,
    image: YVREDDY,
  },
];

const Testimonials = ({ animation }) => {
  const [currentActive, setCurrentActive] = useState("AP Bired");

  const selectedReview = data.filter((item) => {
    return item.name === currentActive;
  });

  return (
    <div
      data-aos={animation}
      className={`${styles.container} section-padding mt-5`}
    >
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
          <Image src={selectedReview[0].image} alt="" />
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
              <div className="d-flex align-items-center justify-content-center">
                <Image thumbnail src={data[i].image} alt="" />
              </div>

              <p className="p-xl text-center t-primary">"{data[i]?.review}"</p>
              <span className="mt-3 d-flex align-items-center justify-content-center">
                <Image className="mb-3" src={QUOTEICON} alt="" />
                <p className="p2 mx-2 t-bold t-primary">{data[i]?.name}</p>{" "}
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
