import React from "react";
import "./button.css";

const Button = ({ text = "Discover More" }) => {
  return (
    <div className="btn-container">
      <i className="fa-regular fa-heart"></i>
      <span>{text}</span>
    </div>
  );
};

export default Button;

