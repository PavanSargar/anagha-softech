/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import PORTFOLIOIMG from "../../assets/images/portfolio-img.png";
import { FiArrowLeft } from "react-icons/fi";
import Wrapper from "../../libs/Wrapper/index";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileUpload from "../../components/FileUpload";
import Button from "../../libs/Button/Button";
import { useForm } from "react-hook-form";

import USERICON from "../../assets/inputIcons/user.svg";
import PHONEICON from "../../assets/inputIcons/phone.svg";
import EMAILICON from "../../assets/inputIcons/email.svg";

import styles from "./index.module.css";
import Config from "../../../Config";
import axios from "axios";

const CareerDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("fileUrl", pdfFile);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    var config = {
      method: "post",
      url: `${Config.backendUrl}/job-application/createOne`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    await axios(config)
      .then(function (response) {
        setSuccess(true);
        setLoading(false);
        setError(false)
      })
      .catch(function (error) {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <div className={`${styles.container}`}>
        <Link to="/career">
          <button className="d-flex align-items-center gap-2 ">
            <FiArrowLeft color="#000" size={16} /> Back
          </button>
        </Link>

        <div className={`${styles.content} mt-5`}>
          <h4 className="H4 t-dark">Product Designer </h4>
          <p className="p1 text-grey">
            We're looking for a mid-level product designer to join our team.
          </p>

          {/* <div
            className={`${styles["ourportfolio"]} mt-5 d-flex gap-5 align-items-start justify-content-center`}
          >
            <h3 className="H6 t-primary w-100 ">— About Anaghasoftech</h3>
            <div className={`${styles.description}`}>
              <p className=" p-lg text-grey w-100">
                Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris
                eu rhoncus neque. Nullam tempor tempor magna a ultricies. Sed
                leo eros, volutpat gravida ante at, vestibulum porttitor ante.
                In consectetur, purus a ultricies tempus, nisi dui commodo
                turpi.
              </p>
            </div>
          </div> */}

          <div className="mt-5">
            <h4 className="H5 mb-3">Description</h4>
            <p className="text-grey p1">
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

          <div className="mt-5">
            <h4 className="p-lg fw-bold mb-3">Application Form</h4>

            <form className={`${styles.form}`}>
              <div
                className={`d-flex align-items-center justify-content-between`}
              >
                <FormInput
                  {...register("name")}
                  type="text"
                  placeholder="Enter Name"
                  icon={USERICON}
                />
                <FormInput
                  type="number"
                  placeholder="Enter Phone"
                  icon={PHONEICON}
                  {...register("phone")}
                />
              </div>
              <FormInput
                type="email"
                placeholder="Enter email address"
                icon={EMAILICON}
                {...register("email")}
              />

              {isSuccess && (
                <p className="text-success p3">
                  Thanks, we'll respond to your query ASAP!
                </p>
              )}

              {isError && (
                <p className="text-danger p3">
                  Something went wrong, please try again!
                </p>
              )}

              <h4 className="p2 mb-3">Upload Resume*</h4>
              <FileUpload pdfFile={pdfFile} setPdfFile={setPdfFile} />
              <div className="mb-4"></div>
              {}
              <Button
                disabled={isSuccess}
                onClick={handleSubmit(onSubmit)}
                className="bg-blue"
                fixed
              >
                {loading
                  ? "Submitting..."
                  : isSuccess
                  ? "Application Submitted Successfully"
                  : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerDetail;

const FormInput = React.forwardRef(
  ({ type, placeholder, icon, textarea, ...rest }, ref) => {
    return (
      <div className={`${styles.input} d-flex align-items-start gap-3`}>
        <Image src={icon} alt="" />
        {textarea ? (
          <textarea
            {...rest}
            ref={ref}
            type={type}
            placeholder={placeholder}
            rows={3}
          />
        ) : (
          <input {...rest} ref={ref} type={type} placeholder={placeholder} />
        )}
      </div>
    );
  }
);
