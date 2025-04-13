import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server or email)
    alert('Form submitted!');
  };

  return (
    <div className="apply-form-page">
      <h2>Apply for the Role</h2>
      <form onSubmit={handleFormSubmit} className="apply-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Resume (PDF only):</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
