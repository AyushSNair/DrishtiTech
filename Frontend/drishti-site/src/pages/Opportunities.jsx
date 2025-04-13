import React from 'react';
import './Opportunities.css';

const Opportunities = () => {
  return (
    <div className="opportunities-page">
      <h2>Opportunities at DrishtiTech</h2>

      <div className="opportunity">
        <h4>Software Intern - AI/ML</h4>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Duration:</strong> 6 months</p>
        <p><strong>Description:</strong> Assist in developing machine learning models and contributing to real-time football analysis tools.</p>
      </div>

      <div className="opportunity">
        <h4>Frontend Developer Intern</h4>
        <p><strong>Location:</strong> Goa / Remote</p>
        <p><strong>Duration:</strong> 3–6 months</p>
        <p><strong>Description:</strong> Build intuitive UIs using ReactJS with a focus on performance and theme consistency.</p>
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
