import React, { useState } from "react";
import "./contact.css";
import image23 from "../assets/23.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  // ✅ State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate form fields
    if (!name || !email || !phone || !message) {
      setResponseMessage("❌ All fields are required!");
      return;
    }

    // ✅ Send data to backend
    try {
      const response = await fetch("http://localhost:4000/api/contact/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setResponseMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setResponseMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <>
      <div className="contact-page">
        {/* Contact Header */}
        <div className="contact-header">
          <img src={image23} alt="Contact" />
          <h2>Contact Us</h2>
        </div>

        {/* Contact Form */}
        <div className="contact-form-main">
          <div className="contact-form">
            <h2>Let’s make the world better, together</h2>

            {responseMessage && <p className="message">{responseMessage}</p>}

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <textarea placeholder="Tell us more..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              <button type="submit" className="send-message">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Our Location<br />Alexima, NT 456678</span>
            </div>
            <div className="contact-item">
              <i className="fa-regular fa-message"></i>
              <span>Send Us Mail<br />Info@yourdomain.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>Call Us<br />+456 456 4443</span>
            </div>
          </div>
        </div>

        {/* Google Maps */}
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
      <Footer />
    </>
  );
};

export default Contact;
