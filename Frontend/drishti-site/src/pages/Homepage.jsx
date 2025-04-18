import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Homepage.css';
import logo from '../assets/logo.png';
import bgVideo from '../assets/bg-final-vid.mp4';
import { FiMenu, FiX } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const role = user?.role;

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="homepage-container">
        {/* Background Video */}
        <div className="video-wrapper">
          <video className="background-video" autoPlay loop muted preload="auto">
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Logo */}
        <Container className='logo'>
  <img src={logo} alt="Logo" className="d-inline-block align-top logo-img" />
</Container>


        {/* Menu Button */}
        <div className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>

        {/* Overlay Text */}
        <Container className="overlay-container">
          <h1 className="title">Drishti Technologies</h1>
          <p className="vision">"We Empower World`s Passion for Football."</p>
        </Container>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="dropdown-menu-custom">
            <Link to="/" className="menu-link" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="menu-link" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="menu-link" onClick={toggleMenu}>Contact</Link>
            <Link to="/products" className="menu-link" onClick={toggleMenu}>Products</Link>
            {user ? (
              <>
                <div className="menu-user-info">
                  <span>Welcome, {user.name} ({role})</span>
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
              </>
            ) : (
              <Link to="/auth" className="menu-link" onClick={toggleMenu}>Login</Link>
            )}
          </div>
        )}
      </div>

      {/* About Us Section */}
      <section className="about-section" data-aos="fade-up">
  <h2 className="about-heading" data-aos="zoom-in" data-aos-delay="200">WE ARE DRISHTI</h2>
  <p data-aos="fade-up" data-aos-delay="400">
    We are a sports analytics company providing high quality match performance analytics & AI model 
    that can automatically detect fouls during live football matches within 5 seconds 
    & help referees with better refereeing.
  </p>
  <div className="about-button-wrapper">
    <button className="about-us-button" onClick={() => navigate('/about')}>
      About Us
    </button>
  </div>
</section>
<footer className="footer-section">
      <div className="footer-content">

        <div className="footer-left">
          <h3>DRISHTI TECH</h3>
          <p>Empowering the future of AI-driven sports analysis.</p>

          <div className="footer-contact">
            <p><FaMapMarkerAlt /> Navi Mumbai, India</p>
            <p><FaEnvelope /> maanvi.tech@example.com</p>
            <p><FaPhone /> +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-right">
          <p>&copy; {new Date().getFullYear()} DRISHTI TECH. All rights reserved.</p>
        </div>

      </div>
    </footer>

    </>
  );
};

export default Homepage;