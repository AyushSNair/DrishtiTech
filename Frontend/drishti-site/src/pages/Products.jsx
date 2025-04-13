import React from 'react';
import './Products.css';

// Import images from src/assets
import prod1 from '../assets/prod12.jpg';
import prod2 from '../assets/prod2.jpeg';

const Products = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>

      <div className="product-section">
        <div className="product-content">
          <div className="text-content">
            <h3>MAANVI</h3>
            <p><strong>Motion Artificial Analysis N Visual Inference</strong></p>
            <ul>
              <li>Custom-built ML model for in-depth match and player analytics.</li>
              <li>Offers 100% precision for data generation.</li>
              <li>Designed to be affordable for Tier 1 and grassroots football leagues globally.</li>
            </ul>
          </div>
          <div className="image-content">
            <img src={prod1} alt="MAANVI Product" />
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="product-content">
          <div className="text-content">
            <h3>VISION+</h3>
            <p>Real-time referee assistance ML model for fast-paced football matches.</p>
            <ul>
              <li>Predicts match-time fouls and goal decisions within 5 seconds.</li>
              <li>Acts as a live assistant to referees, unlike post-mortem VAR.</li>
              <li>Aims to ensure fair, unbiased, and accurate officiating in real time.</li>
            </ul>
          </div>
          <div className="image-content">
            <img src={prod2} alt="VISION+ Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
