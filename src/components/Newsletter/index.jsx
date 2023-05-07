import React from "react";

import Wrapper from "../../libs/Wrapper/index";
import Button from "../../libs/Button/Button";

import styles from "./index.module.css";

const Newsletter = () => {
  return (
    <Wrapper>
      <div
        className={`${styles.container} d-flex align-items-center justify-content-between flex-wrap`}
      >
        <div className={`${styles.heading}`}>
          <h3 className="H4-sm fw-bold section-heading mb-4 t-primary w-100">
            — Our Newsletter
          </h3>
          <p className="mb-4 p1 text-grey w-75">
            Stay ahead of the curve with the latest trends, updates, and
            industry insights.
          </p>
        </div>

        <div className={`${styles.input}`}>
          <input placeholder="Enter your email" type="email" />
          <button className="bg-blue">Submit</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
