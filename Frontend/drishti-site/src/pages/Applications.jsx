import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Applications.css'; // Importing the CSS

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // New state to handle loading

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Get the token from localStorage (assuming it is stored after login)
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/apply`, {
          headers: {
            Authorization: `Bearer ${token}` // Add token to headers for authentication
          }
        });
        

        console.log('Fetched applications:', response.data);
        setApplications(response.data);
      } catch (err) {
        console.error('Error fetching applications:', err);
        setError('Error fetching applications');
      } finally {
        setLoading(false); // Stop loading after the request is done
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="applications-container">
      <h2>Applications</h2>
      {error && <p className="error-message">{error}</p>}
      
      {applications.length > 0 ? (
        <table className="applications-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Applied At</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{new Date(app.appliedAt).toLocaleString()}</td>
                <td>
                  <a
                    href={`${process.env.REACT_APP_API_URL}/${app.resumePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    View Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-applications">No applications found</p>
      )}
    </div>
  );
};

export default Applications;



