import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Founder:</strong> Mr. Ved</p>
        <p><strong>Phone:</strong> <a href="tel:+918879648259">+91 88796 48259</a></p>
        <p><strong>Email:</strong> <a href="mailto:contact@drishtitech.com">contact@drishtitech.com</a></p>
        <p><strong>Location:</strong> CIBA - Centre for Innovation & Business Acceleration</p>
      </div>

      <form className="contact-form">
        <h3>Send Message</h3>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Type your Message..." rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
