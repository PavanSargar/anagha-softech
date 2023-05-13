/* eslint-disable react/prop-types */
import React from "react";

import { TbSend } from "react-icons/tb";

import styles from "./index.module.css";
import { Link } from "react-router-dom";

const ContactBanner = ({ animate }) => {
  return (
    <div
      data-aos={animate}
      className={`${styles.container} d-flex align-items-center gap-4 justify-content-between`}
    >
      <h4 className="H4 text-white w-50">
        Have a Requirement? Let Experts at Anagha Softech Handle It.
      </h4>
      <Link to="/contact">
        <button>
          {" "}
          <TbSend color="fff" size={18} />
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactBanner;
