/* eslint-disable react/no-unescaped-entities */
import React from "react";

import PORTFOLIOIMG from "../../assets/images/portfolio-img.png";
import { FiArrowLeft } from "react-icons/fi";
import Wrapper from "../../libs/Wrapper/index";

import styles from "./index.module.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CareerDetail = () => {
  return (
    <Wrapper>
      <div className={`${styles.container}`}>
        <Link to="/portfolio">
          <button className="d-flex align-items-center gap-2 ">
            <FiArrowLeft color="#000" size={16} /> Back
          </button>
        </Link>

        <div className={`${styles.content} mt-5`}>
          <h4 className="H4 t-dark">Skillo || Mobile App Exploration </h4>
          <p className="p-xl text-grey">
            Elegant product mockup for your next project Elegant product mockup
            for your next project
          </p>
          <Image src={PORTFOLIOIMG} alt="" />

          <div
            className={`${styles["ourportfolio"]} mt-5 d-flex gap-5 align-items-start justify-content-center`}
          >
            <h3 className="H6 t-primary w-100 ">— The Challenges</h3>
            <div className={`${styles.description}`}>
              <p className=" p-xl text-grey w-100">
                Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris
                eu rhoncus neque. Nullam tempor tempor magna a ultricies. Sed
                leo eros, volutpat gravida ante at, vestibulum porttitor ante.
                In consectetur, purus a ultricies tempus, nisi dui commodo
                turpi.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="H4-lg mb-5">Brand identity</h4>
            <p className="text-grey p-xl">
              Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo turpi.Nunc
              non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo turpi.Nunc
              non mi vulputate, vehicula nisi.
            </p>
          </div>
          <div className="mt-5 pt-5">
            <h4 className="H4-lg mb-5">Wireframe</h4>
            <p className="text-grey p-xl mb-4">
              Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo
              turpi.Nunc.
            </p>
            <p className="text-grey p-xl">
              Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo
              turpi.Nunc.
            </p>
          </div>

          <div className="mt-5 pt-5">
            <h4 className="H4-lg mb-5">Visual aesthetics</h4>
            <p className="text-grey p-xl mb-4">
              Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo
              turpi.Nunc.
            </p>
            <p className="text-grey p-xl">
              Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
              rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo
              eros, volutpat gravida ante at, vestibulum porttitor ante. In
              consectetur, purus a ultricies tempus, nisi dui commodo
              turpi.Nunc.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerDetail;
