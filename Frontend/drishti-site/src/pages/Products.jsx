import React, { useState } from 'react';
import './Products.css';
import prod1 from '../assets/image1.png';  // Assuming the image paths are correct
import prod2 from '../assets/image21.jpg';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [club, setClub] = useState('');
  const [country, setCountry] = useState('');

  // Function to open the modal
  const handleEnquireClick = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = {
      email,
      password,
      club,
      country,
    };

    try {
      // Send data to the backend using a POST request
      const response = await fetch('http://localhost:5000/api/enquire/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully', result);
        closeModal();  // Close the modal after submission
      } else {
        console.log('Error submitting form:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="products-page">
      <h2>Our Products</h2>

      {/* Product Section 1 */}
      <div className="product-section">
        <div className="product-content">
          <div className="text-content">
            <h3>VISION PRO (Match Performance Analytics Tool)</h3>
            <p>Some product details here...</p>
            <ul>
              <li>Total Distance covered</li>
              <li>Speed & Acceleration</li>
              <li>Pass accuracy & Key passes</li>   
              <li>Shots on target & expected goals</li>
              <li>Defensive actions</li>  
              <li>HeatMaps</li>
            </ul>
            <button className="enquire-button" onClick={handleEnquireClick}>Enquire Us</button>
          </div>
          <div className="image-content">
            <img src={prod1} alt="Vision Pro" />
          </div>
        </div>
      </div>

      {/* Product Section 2 */}
      <div className="product-section">
        <div className="product-content">
          <div className="text-content">
            <h3>VISION+ (Automatic Foul Detection System)</h3>
            <p>More product details...</p>
            <ul>
              <li><b>Real-Time Analysis:</b> AI processes player movement, ball dynamics, and contact points to identify fouls, potential red cards, penalties, and other crucial moments.</li>
              <li><b>Referee Alerts:</b> Alerts and insights are provided to referees via handheld devices or wearable tech for faster decision-making and more accurate calls.</li>
            </ul>
            <button className="enquire-button" onClick={handleEnquireClick}>Enquire Us</button>
          </div>
          <div className="image-content">
            <img src={prod2} alt="Vision Plus" />
          </div>
        </div>
      </div>

      {/* Pop-up Modal for Enquiry Form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>Enquire About Our Product</h3>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter your club"
                value={club}
                onChange={(e) => setClub(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
