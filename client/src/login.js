import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      const { token, role } = response.data;

      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      setRole(role); // Set the role received from the server

    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  if (isLoggedIn) {
    if (role === 'admin') {
      return <Navigate to="/dashboard" />;
    } else if (role === 'user') {
      return <Navigate to="/onlinedash" />;
    }
  }

  return (
    <div className="container">
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background:lavender;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .input {
          width: 100%;
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease-in-out;
        }

        .input:hover {
          border-color: #007bff;
        }

        .button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          animation: pulse 1s infinite;
          width: 100%;
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          
          
          outline: none;
          transition: border-color 0.3s ease-in-out;
        }

        .button:hover {
          background-color: #0056b3;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      <form onSubmit={handleSubmit} className="form">
        <h2>BANKING AND FINANCE MANAGEMENT SYSTEM</h2>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="input" placeholder="Password" />
        <button type="submit" className="button">Login</button>
        <Link to="/register">
            <button className="button">Register</button>
          </Link>
      </form>
    </div>
  );
};

export default Login;
