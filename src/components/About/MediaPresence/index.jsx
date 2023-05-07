import React from "react";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Wrapper from "../../../libs/Wrapper/index";
import Card from "../../../libs/Card/Card";

import MEDIAICON from "../../../assets/icons/media.svg";

import styles from "./index.module.css";

const MediaPresence = () => {
  return (
    <Wrapper>
      <div
        className={`${styles.heading} d-flex align-items-center justify-content-between`}
      >
        <div className="px-5 mb-4">
          <h3 className="H3  t-primary mb-2">Our Media Presence</h3>
          <p className="p-1 text-grey w-75 ">
            Making headlines with our cutting-edge solutions and industry
            insights.
          </p>
        </div>
        <div className={`${styles.arrows} gap-3`}>
          <span className="d-flex align-items-center">
            <HiOutlineArrowNarrowLeft color="#C701FF" size={16} />
            <HiOutlineArrowNarrowRight color="#777E90" size={16} />{" "}
          </span>
        </div>
      </div>

      <div
        className={`${styles.card} flex-wrap d-flex align-items-center justify-content-center gap-5`}
      >
        <Card
          center
          type
          title="AIG Media Presence"
          icon={MEDIAICON}
          description="A 7-days training program designed to boost your strength & endurance over the course of a week."
        />
        <Card
          center
          type
          title="AIG Media Presence"
          icon={MEDIAICON}
          description="A 7-days training program designed to boost your strength & endurance over the course of a week."
        />
        <Card
          center
          type
          title="AIG Media Presence"
          icon={MEDIAICON}
          description="A 7-days training program designed to boost your strength & endurance over the course of a week."
        />
      </div>
    </Wrapper>
  );
};

export default MediaPresence;
