import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        
        <h2>Contact Us</h2>
        <p>Luxury Salon Experience Just For You</p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-box">
            <h3><FaMapMarkerAlt size={18} className="icon" /> Our Location</h3>
            <p>123 Beauty Lane, Pink City, Jaipur</p>
          </div>

          <div className="info-box">
            <h3><FaEnvelope size={18} className="icon" /> Email Us</h3>
            <p>support@beautyhub.com</p>
          </div>

          <div className="info-box">
            <h3><FaPhoneAlt size={18} className="icon" /> Call Us</h3>
            <p>+91 9876543210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


