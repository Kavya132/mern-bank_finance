import React, { useState } from 'react';
import axios from 'axios';

const Closeaccount = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/closeaccount', formData);
      if (response.data.success) {
        alert('Account deleted successfully');
        setFormData({ email: '' });
      } else {
        alert('Account deletion failed');
      }
    } catch (error) {
      console.error(error);
      alert('Account deletion failed');
    }
  };

  return (
    <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ border: '4px double black', borderRadius: '10px', padding: '20px' }}>
          <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Account Deletion</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              required
            />
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer', display: 'block', margin: '0 auto' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Closeaccount;
