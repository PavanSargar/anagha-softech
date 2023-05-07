/* eslint-disable react/prop-types */
import React from "react";

import styles from "./Button.module.css";

const Button = ({children, className, fixed, flex}) => {
  return (
    <div  className={`${styles.container} ${styles[className]} ${flex && styles.flex} ${fixed && styles.fixed}`}>
      {children}
    </div>
  );
};

export default Button;
