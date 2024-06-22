import React, { useState } from 'react';
import axios from 'axios';

const Transfer = () => {
  const [formData, setFormData] = useState({
    receiverEmail: '',
    amount: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming the token is stored in localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle token not found, maybe redirect to login page
        console.error('Authorization token not found');
        return;
      }

      const response = await axios.post('http://localhost:5000/transfer', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error: Failed to initiate transfer');
    }
  };

  // Internal CSS styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh', // Ensure the container takes up the full screen height
      backgroundColor: 'lavender' // Lavender background color
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '400px',
      marginTop: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      margin: '10px',
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      outline: 'none',
      color: '#000',
      backgroundColor: '#fff'
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      padding: '12px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      outline: 'none'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px'
    },
    message: {
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Transfer Funds</h2>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="receiverEmail">Receiver's Email:</label>
            <input
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              value={formData.receiverEmail}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={{ ...styles.button, ...styles.buttonHover }}>
            Transfer
          </button>
        </form>
      </div>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default Transfer;
