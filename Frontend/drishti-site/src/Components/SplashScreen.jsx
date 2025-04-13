import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'; // adjust the path
import './SplashScreen.css'; // styles here

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500); // start fade after 1.5s
    const hideTimer = setTimeout(() => setShow(false), 2000);   // hide after 2s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <img src={logo} alt="Splash Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
