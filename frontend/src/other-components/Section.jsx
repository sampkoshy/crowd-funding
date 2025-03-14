import React from "react";
import "./section.css";
import { Link } from "react-router";

const Section = () => {
  return (
    <div className="section1">
      {/* Section Content */}
      <section className="section-container">
        <h2>
          Join with us and <br /> save the world
        </h2>
        <p>
          Numerous ladyship so raillery humoured goodness received an. So narrow
          formal length my highly longer afford oh. Tall neat he make.
        </p>
        <div className="donate-container">
          <i className="fa-regular fa-heart"></i>
        <Link to={'/About'}> <span>Discover More</span></Link> 
        </div>
      </section>
    </div>
  );
};

export default Section;
