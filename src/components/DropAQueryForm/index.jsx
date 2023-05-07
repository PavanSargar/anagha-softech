import React from "react";
import Button from "../../libs/Button/Button";

import styles from "./index.module.css";

const DropAQueryForm = () => {
  return (
    <div className={styles.container}>
      <h5 className="H5 mb-4 mt-2">Drop a Query</h5>
      <form className={styles.form}>
        <div className={`${styles["form-group"]}`}>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter your Company email " />
        </div>
        <div className={`${styles["form-group"]}`}>
          <input type="text" placeholder="Enter Your Company Name" />
          <input type="text" placeholder="Enter your Mobile Number " />
        </div>
        <div className={`${styles["form-group"]}`}>
          <textarea type="text" rows={5} placeholder="Your message" />
        </div>

        <div className={`${styles.button} d-flex flex-column align-items-end mb-2`}>
          <Button className="bg-blue">Send Now</Button>
        </div>
      </form>
    </div>
  );
};

export default DropAQueryForm;
