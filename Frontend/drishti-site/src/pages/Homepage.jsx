// src/pages/Homepage.jsx
import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Homepage.css';
import logo from '../assets/logo.png';
import bgVideo from '../assets/bg-final-vid.mp4';
import { FiMenu, FiX } from 'react-icons/fi'; // For menu and close icons

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const role = user?.role;

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="homepage-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted preload="auto">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Logo */}
      <Container className='logo'>
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-top logo-img"
        />
      </Container>

      {/* Menu Button */}
      <div className="menu-button" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Overlay with content */}
      <Container className="overlay-container">
        <h1 className="title">Drishti Technologies</h1>
        <p className="vision">"We Empower World`s Passion for Football."</p>
      </Container>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu-custom">
          <Link to="/" className="menu-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="menu-link" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="menu-link" onClick={toggleMenu}>Contact</Link>
          <Link to="/products" className="menu-link" onClick={toggleMenu}>Products</Link>
          {user && (
            <>
              {/* {role === "Admin" && (
                <Link to="/applications" className="menu-link" onClick={toggleMenu}>Applications</Link>
              )} */}
              <div className="menu-user-info">
                <span>Welcome, {user.name} ({role})</span>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </>
          )}

          {!user && (
            <Link to="/auth" className="menu-link" onClick={toggleMenu}>Login</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage;
