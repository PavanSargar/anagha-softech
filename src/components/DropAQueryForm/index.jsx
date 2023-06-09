/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Button from "../../libs/Button/Button";
import axios from "axios";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
import Config from "../../../Config";

const DropAQueryForm = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    var config = {
      method: "post",
      url: `${Config.backendUrl}/query/createOne`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        setSuccess(true);
        setLoading(false);

        reset();
      })
      .catch(function (error) {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <h5 className="H5 mb-4 mt-2">Drop a Query</h5>
      <form className={styles.form}>
        <div className={`${styles["form-group"]}`}>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            {...register("companyEmail", { required: true })}
            type="email"
            placeholder="Enter your Company email "
          />
        </div>
        <div className={`${styles["form-group"]}`}>
          <input
            {...register("companyName", { required: true })}
            type="text"
            placeholder="Enter Your Company Name"
          />
          <input
            {...register("phone", { required: true })}
            type="text"
            placeholder="Enter your Mobile Number "
          />
        </div>
        <div className={`${styles["form-group"]}`}>
          <textarea
            {...register("message", { required: true })}
            type="text"
            rows={5}
            placeholder="Your message"
          />
        </div>

        <div
          className={`${styles.button} d-flex flex-column align-items-end mb-2`}
        >
          {isError && <p className="p3 text-danger">Something went wrong.</p>}
          {isSuccess && (
            <p className="p3 text-success">We'll get back to you soon.</p>
          )}

          <Button
            disabled={isSuccess}
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="bg-blue"
          >
            {loading ? "Sending..." : "Send Now"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DropAQueryForm;
