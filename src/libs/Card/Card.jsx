/* eslint-disable react/prop-types */
import React from "react";
import { Image } from "react-bootstrap";

import Button from "../Button/Button";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  link = "/",
  icon,
  type,
  fixed,
  center,
  fixedHeight,
}) => {
  return (
    <div className={`${styles.container} ${center && "pt-5"} ${fixed && styles.fixed} ${center && styles["align-center"]}`}>
      <span className={`text-center ${center && styles.center} ${fixedHeight && styles["height-fixed"]}`}>
        <Image className="mb-4" src={icon} alt="" />
      </span>
      <h6 className={`H6 mb-3 ${center && "text-center"}`}>{title}</h6>
      <p className={` para-text ${center ? "text-center" : "mb-5"}`}>
        {description}
      </p>

      {!type && (
        <Link to={link}>
          <Button className="hover-blue">Know more</Button>
        </Link>
      )}
    </div>
  );
};

export default Card;
