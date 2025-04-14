import React, { useState, useContext } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Guest',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '', role: 'Guest' });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? 'signup' : 'login';

    try {
      const bodyData = {
        email: formData.email,
        password: formData.password,
        role: formData.role,
        ...(isSignUp && { name: formData.name }),
      };


        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/${endpoint}`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);

        let finalUser = result.user;

        // Decode JWT to extract role and attach it
        if (!isSignUp && result.token) {
          try {
            const decoded = JSON.parse(atob(result.token.split('.')[1]));
            finalUser = { ...result.user, role: decoded.role };
          } catch (err) {
            console.error('Failed to decode JWT:', err);
          }
        }

        // Store updated user in AuthContext
        login(finalUser);

        // Redirect based on role
        if (finalUser.role === 'Admin') {
          navigate('/applications');
        } else {
          navigate('/');
        }
      } else {
        setError(result.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong.');
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Guest">Guest</option>
            <option value="Admin">Admin</option>
          </select>

          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>

        {error && <p className="error">{error}</p>}

        <p onClick={handleToggle} className="toggle-btn">
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
