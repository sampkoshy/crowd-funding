import React from "react";
import "./contact.css";
import image23 from "../assets/23.jpg";
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <div className="contact-page">

      {/* Contact Header Image */}
      <div className="contact-header">
        <img src={image23} alt="Contact" />
        <h2>Contact Us</h2>
      </div>

      {/* Contact Form */}

      <div className="contact-form-main">
        <div className="contact-form">
          <div className="contact-head">
            <h2>Let’s make the world better, together</h2>
          </div>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Tell us more..."></textarea>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details">
          {/* Location */}
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>
              Our Location
              <br />
              Alexima, NT 456678
            </span>
          </div>

          {/* Email */}
          <div className="contact-item">
            <i className="fa-regular fa-message"></i>
            <span>
              Send Us Mail
              <br />
              Info@yourdomain.com
            </span>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>
              Call Us
              <br />
              +456 456 4443
            </span>
          </div>
        </div>
      </div>

      {/* Send Message Button */}
      <div className="send-message">
        <span>Send Message</span>
        <i className="fa-solid fa-paper-plane"></i>
      </div>
      <div className="maps">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31512.085292217595!2d76.71008296621146!3d9.153508988010959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06117fd96592e3%3A0xdb10856f42d5c637!2sAdoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1741663669716!5m2!1sen!2sin"
          width="100%"
          height="380"
          frameBorder="0"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
