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
            <h3>VISION PRO</h3>
            <p>Our state of the custom machine learning algorithm which analyzes complete matches & creates custom datasets for each team & each player about their performances based on the following markers:

</p>
            <ul>

             <li>total distance covered
</li>
<li>speed & acceleration</li>
<li>pass accuracy & key passes</li>   
<li>shots on target & expected goals</li>
<li>defensive actions</li>  
            </ul>
            <button className="enquire-button">Enquire Us</button>
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
            <p>A custom Machine Learning which is trained on large number of diversified datasets of different scenarios to be able to do the following things:</p>
            <ul>

             <li><b>Real-Time Analysis: </b>
AI processes player movement, ball dynamics and contact points to identify fouls, potential red cards, penalties, and other crucial moments.
</li>
              <li><b>Referee Alerts: </b>
Alerts and insights are provided to referees via handheld devices or wearable tech for faster decision-making and more accurate calls.
 </li>
              
            </ul>
            <button className="enquire-button">Enquire Us</button>
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
