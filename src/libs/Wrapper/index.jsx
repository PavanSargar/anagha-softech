/* eslint-disable react/prop-types */
import React from "react";


const Wrapper = ({ children, className, animation }) => {
  return (
    <div data-aos={animation} className={`section-padding mt-5 ${className} `}>
      {children}
    </div>
  );
};

export default Wrapper;
