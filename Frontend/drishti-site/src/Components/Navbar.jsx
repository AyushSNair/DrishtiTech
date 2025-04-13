import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // adjust the path based on your folder structure

const NavbarComponent = () => {
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
          </Nav>
          <Form className="d-flex search-form">
            <FormControl type="search" placeholder="Search" className="me-2 search-box" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
