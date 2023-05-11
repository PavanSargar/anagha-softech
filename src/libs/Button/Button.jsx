/* eslint-disable react/prop-types */
import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, className, fixed, flex, onClick, disabled }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`${styles.container} ${styles[className]} ${
        flex && styles.flex
      } ${fixed && styles.fixed} ${disabled && styles.disabled}`}
    >
      {children}
    </div>
  );
};

export default Button;
