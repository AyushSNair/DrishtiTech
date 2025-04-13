import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      const data = await res.json();
      if (data.message) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setResponseMessage('Error: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Founder:</strong> Mr. Ved</p>
        <p><strong>Phone:</strong> <a href="tel:+918879648259">+91 88796 48259</a></p>
        <p><strong>Email:</strong> <a href="mailto:melissasequeira572@gmail.com">contact@drishtitech.com</a></p>
        <p><strong>Location:</strong> CIBA - Centre for Innovation & Business Acceleration</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Message</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Type your Message..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Contact;
