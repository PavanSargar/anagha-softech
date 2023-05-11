/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../../libs/Wrapper/index";
import Button from "../../libs/Button/Button";

import styles from "./index.module.css";

const Newsletter = ({ animation }) => {
  const [email, setEmail] = useState("");
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async () => {
    setIsError(false);
    setInvalidEmail(false);
    email.trim();
    if (email.includes("@") && email.includes(".")) {
      var config = {
        method: "post",
        url: "http://localhost:5000/newsletter/createOne",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email },
      };

      await axios(config)
        .then(function (response) {
          setSuccess(true);
          console.log(JSON.stringify(response.data));
          setEmail("");
        })
        .catch(function (error) {
          console.log(error);
          setIsError(true);
        });
    } else {
      setInvalidEmail(true);
    }
  };

  return (
    <Wrapper animation={animation}>
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
        <div>
          <div className={`${styles.input}`}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setInvalidEmail(false);
              }}
              placeholder="Enter your email"
              type="email"
            />
            <button disabled={isSuccess} onClick={onSubmit} className="bg-blue">
              Submit
            </button>
          </div>
          {isSuccess && (
            <p className="text-success p3 my-2">You are subscribed!</p>
          )}
          {isInvalidEmail && (
            <p className="text-danger p3 my-2">Invalid email!</p>
          )}
          {isError && (
            <p className="text-danger p3 my-2">
              Something went wrong please try again later!
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
