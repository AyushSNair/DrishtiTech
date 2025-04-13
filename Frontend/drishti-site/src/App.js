// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/AboutUs';
import SplashScreen from './Components/SplashScreen';
import Products from './pages/Products';
import Opportunities from './pages/Opportunities';
import ApplyForm from './Components/Apply';  // Import the ApplyForm component
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <SplashScreen />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/apply" element={<ApplyForm />} />  {/* Add the Apply route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
