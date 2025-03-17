import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css"; // Importing the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">
            <span className="highlight"></span>
            <span>Charity Life</span>
          </h2>
          <p className="footer-text">
            Happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.
          </p>
          <div className="subscribe-container">
            <input type="email" placeholder="Your Email" className="subscribe-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-list">
            <li>Our Causes</li>
            <li>New Campaign</li>
            <li>Site Map</li>
            <li>Donate</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <p className="footer-text">
            <i className="fas fa-map-marker-alt icon"></i> Thuvayoor south p o adoor
          </p>
          <p className="footer-text">
            <i className="fas fa-envelope icon"></i> sampkoshy53@gmail.com
          </p>
          <p className="footer-text">
            <i className="fas fa-phone icon"></i> 8078730392
          </p>
        </div>

        {/* Latest News */}
        <div className="footer-section">
          <h3 className="footer-title">Latest News</h3>
          <div className="footer-news">
            <p>Delighted prevailed supported too not remainder perpetual.</p>
            <span className="footer-date">
              <i className="fas fa-calendar-alt icon"></i> 17 mar 2025- <span className="admin">ADMIN</span>
            </span>
          </div>
          <div className="footer-news">
            <p>Speaking trifling an to unpacked moderate debating learning management.</p>
            <span className="footer-date">
              <i className="fas fa-calendar-alt icon"></i> 17 mar 2025 - <span className="admin">USER</span>
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Copyright © 2025. Designed by <span className="highlight">SAM P KOSHY</span></p>
      </div>
    </footer>
  );
};

export default Footer;
