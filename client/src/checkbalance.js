import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    checkBalance();
  }, []);

  const checkBalance = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Authorization token not found');
        return;
      }

      const response = await axios.get('http://localhost:5000/checkbalance', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setBalance(response.data.balance);
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const styles = {
    container: {
      backgroundColor: 'lavender',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontSize: '24px', // Increased font size
      border: '2px double black', // Double line border
      maxWidth: '400px' // Adjusted width of the box
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <p style={{ color: 'blue', fontWeight: 'bold' }}>Your balance: {balance !== null ? balance : 'Loading...'}</p>
      </div>
    </div>
  );
}

export default Dashboard;
