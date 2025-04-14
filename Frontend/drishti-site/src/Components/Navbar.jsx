// src/components/NavbarComponent.js
import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext
import './Navbar.css';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);  // Get user and logout from context

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate('/auth'); // Redirect to login page
  };

  const role = user?.role;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top logo-img"
          />
          {' '}
          Dristi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link as={Link} to="/opportunities" className="nav-link-custom">Opportunities</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>

            {/* Show 'Applications' tab only if the user is Admin */}
            {role === "Admin" && (
              <Nav.Link as={Link} to="/applications" className="nav-link-custom">
                Applications
              </Nav.Link>
            )}
          </Nav>

          {/* Show personalized greeting */}
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.name} as {role}</span>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="outline-light" as={Link} to="/auth">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
