import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import NavbarComponent from './Components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/AboutUs';
import SplashScreen from './Components/SplashScreen';
import Products from './pages/Products';
import Opportunities from './pages/Opportunities';
import ApplyForm from './Components/Apply';  // Import the ApplyForm component
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Applications from './pages/Applications';

const AppRoutes = () => {
  // Use useLocation hook to get the current route
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ['/auth'];

  return (
    <>
      {/* Conditionally render SplashScreen */}
      {location.pathname !== '/auth' && <SplashScreen />}

      {/* Conditionally render Navbar based on current route */}
      {!noNavbarRoutes.includes(location.pathname) && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
