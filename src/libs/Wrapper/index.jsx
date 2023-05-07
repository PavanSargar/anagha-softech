/* eslint-disable react/prop-types */
import React from "react";


const Wrapper = ({ children, className }) => {
  return (
    <div className={`section-padding mt-5 ${className} `}>
      {children}
    </div>
  );
};

export default Wrapper;
