import React from "react";
import "./Certification.css";
const Certificate = (props) => {
  return (
    <>
      <div className="certification-wrapper">
        <h6>{props.heading}</h6>
        <p>{props.para}</p>
      </div>
    </>
  );
};

export default Certificate;
