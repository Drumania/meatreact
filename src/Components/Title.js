import React from "react";
import "./Title.css";
import bkTitles from "../img/heading-shape.png";


const Title = ({ title }) => {

  return (
    <div className="wrap-h3">
      <h3>{title}</h3>
      <img src={bkTitles} alt={title} />
    </div>
  );
};

export default Title;
