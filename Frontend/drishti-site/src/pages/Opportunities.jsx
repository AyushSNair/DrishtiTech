// src/pages/Opportunities.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Opportunities.css';

const Opportunities = () => {
  return (
    <div className="opportunities-page">
      <h2>Opportunities at DrishtiTech</h2>

      <div className="opportunity">
        <h4>Machine Learning Engineer</h4>
        <p><strong>Type:</strong> Hardcore coding (Python)</p>
        <p><strong>Task:</strong> Use YOLO or similar object detection models on football clips to identify fouls, goals, handballs, etc.</p>
        <p><strong>Why it matters:</strong> High intellectual rigor, precision, and creativity. We don't aim to replace referees — we empower them.</p>
        <Link to={`/apply?role=Machine Learning Engineer`}>
  <button className="apply-btn">Apply</button>
</Link>
      </div>

      <div className="opportunity">
        <h4>Data Scraper – Football Intelligence</h4>
        <p><strong>Type:</strong> 95% Research / 5% Basic Python</p>
        <p><strong>Task:</strong> Scrape 50+ football match images + 20 handball scenario images from public web sources.</p>
        <p><strong>Why it matters:</strong> Data is the new fuel. What you scrape feeds our models and defines our accuracy.</p>
        <Link to={`/apply?role=Data Scrapper`}>
  <button className="apply-btn">Apply</button>
</Link>
      </div>

      <div className="note">
        💡 <strong>Note:</strong> All roles are flexible with an opportunity for full-time conversion.
      </div>

      <div className="commitment">
        🔥 <strong>Commitment:</strong> We value passion, innovation, and self-driven individuals ready to make an impact in sports tech.
      </div>
    </div>
  );
};

export default Opportunities;
