import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultRole = queryParams.get('role') || '';

  const [role, setRole] = useState(defaultRole); // 👈 new state for role
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('role', role); // 👈 include role
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.status === 201) {
        alert('Application submitted successfully!');
      } else {
        alert('Error submitting application: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="apply-form-page">
      <h2>Apply for the Role</h2>
      <form onSubmit={handleFormSubmit} className="apply-form">
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

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
