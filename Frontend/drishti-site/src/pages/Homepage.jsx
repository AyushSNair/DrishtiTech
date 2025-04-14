// src/pages/Homepage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Homepage.css';  // Create a CSS file to style the component

// Import the video file
import bgVideo from '../assets/bg-vid.mp4';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <video className="background-video" autoPlay loop muted preload="auto">
        <source src={bgVideo} type="video/mp4" />
        <source src="path_to_your_video.webm" type="video/webm" />
        <source src="path_to_your_video.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      
      <Container className="overlay-container">
        <h1 className="title">Drishti Technologies</h1>
        <p className="vision">"Empowering innovation and accessibility with cutting-edge technology to transform potential into reality."</p>
        
        <div className='buttons'>
          {/* Use Link to navigate to other pages */}
          <Link to="/about" className="cta-button">
            Learn More
          </Link>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
