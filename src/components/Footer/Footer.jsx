import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../../libs/Wrapper";
import { Row, Col, Image } from "react-bootstrap";
import Button from "../../libs/Button/Button";
import LOGO from "../../assets/icons/logo-white.svg";
import EMAILICON from "../../assets/icons/email.svg";
import PHONEICON from "../../assets/icons/phone.svg";
import HOMEICON from "../../assets/icons/home.svg";

import Config from "../../../Config";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isDatePicker, setDatePicker] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    var config = {
      method: "post",
      url: `${Config.backendUrl}/inquiry/createOne`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: data.email,
        phone: data.phone,
        timeSlot: date,
      },
    };

    await axios(config)
      .then(function (response) {
        setLoading(false);
        setSuccess(true);
        setDate("");
        reset();
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div
      onClick={(e) => {
        setDatePicker(false);
      }}
      className={`${styles.container} py-2`}
    >
      <Wrapper>
        <Row className="flex-wrap">
          <Col md={3} sm={6} xs={12}>
            <Image className="mb-5" src={LOGO} alt="" />
            <p className="p-xl text-light mb-3">
              Let’s make a great things together
            </p>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={HOMEICON} alt="" />
              <p className="text-light p2">897 Jonathon Field, Boganburgh</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={PHONEICON} alt="" />
              <p className="text-light p2">+987 654 321 0</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Image className="mb-3" src={EMAILICON} alt="" />
              <p className="text-light p2">hello@ui8.net</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Services</h6>
            <ul className={`${styles.services}`}>
              <Link to="/service/mobile-app-development">App Development</Link>
              <Link tp="/service/cyber-security-">Cyber Security</Link>
              <Link to="/our-services">Product Development</Link>
              <Link to="our-services">Digital Marketing</Link>
              <Link to="our-services">GIS Services</Link>
              <Link to="/service/web-development">Stack Development</Link>
              <Link to="our-services">UI/UX Desingin</Link>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Company</h6>
            <ul className={`${styles.services}`}>
              <Link to="about">About us</Link>
              <Link to="career">Careers</Link>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h6 className="H8 mb-5 fw-bold text-white">Let’s get a call</h6>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.form}`}
            >
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="email">EMAIL</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="PHONE">PHONE</label>
                <input
                  placeholder="Enter your phone"
                  type="text"
                  name="PHONE"
                  id="PHONE"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="date">TIME SLOT</label>

                <input
                  placeholder="Select your time slot"
                  type="text"
                  name="timeSlot"
                  id="timeSlot"
                  value={date}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDatePicker(!isDatePicker);
                  }}
                />

                {isDatePicker && (
                  <div className="position-relative">
                    <div
                      className={`${styles.datepicker} position-absolute  bg-white`}
                    >
                      <DayTimePicker
                        onConfirm={(dateTime) => {
                          setDatePicker(false);
                          setDate(dateTime);
                        }}
                        timeSlotSizeMinutes={15}
                      />
                    </div>
                  </div>
                )}
              </div>
              {error && (
                <p className="text-danger p3 my-2">
                  Something went wrong please try again later.
                </p>
              )}
              <div className="d-flex align-items-center justify-content-start">
                <button disabled={success}>
                  {success ? "You'll soon here from us!" : "Get a call back"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Footer;
