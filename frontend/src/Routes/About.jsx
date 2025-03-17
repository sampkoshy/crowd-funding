import React from 'react';
import image21 from '../assets/21.jpg';
import Footer from '../components/Footer';
import "./about.css"; // Add a CSS file for styling

const About = () => {
  return (
    <>
    <div className="about-container">
      {/* Image Section */}
      <div className="about-image">
        <img src={image21} alt="About Us" />
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-header">
          <h3>About Us</h3>
          <span>We’re a worldwide non-profit charity organization.</span>
        </div>

        <p>
          Principles traveling frequently far delightful its especially acceptance.
          Happiness necessary. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Labore nesciunt ad suscipit iusto dolorum quae recusandae quo illum libero excepturi, 
          provident facere. Delectus possimus cupiditate voluptatum.
        </p>

        {/* Statistics Section */}
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">168K</span>
            <span className="stat-label">Plants Protected</span>
          </div>
          <div className="stat">
            <span className="stat-number">37K Sqmi.</span>
            <span className="stat-label">Ocean Protected</span>
          </div>
          <div className="stat">
            <span className="stat-number">5M Ton</span>
            <span className="stat-label">Water Conserved</span>
          </div>
        </div>

        {/* Volunteer Button */}
        <div className="abt">
          <button className="abt-button">
            <span>Become a Volunteer</span> 
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
