import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchAccountRequests();
  }, []);

  const fetchAccountRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/onlineaccounts');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching account requests:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/onlineaccounts/${id}`, { action: 'approve' });
      alert('Account approved');
      fetchAccountRequests();
    } catch (error) {
      console.error('Error approving account request:', error);
    }
  };

  const handleDecline = async (id) => {
    try {
      await axios.put(`http://localhost:5000/onlineaccounts/${id}`, { action: 'decline' });
      alert('Account declined');
      fetchAccountRequests();
    } catch (error) {
      console.error('Error declining account request:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Account Requests</h2>
        {requests.map(request => (
          <div key={request._id} style={{ border: '2px double black', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
            <div><b>FullName &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{request.fullname}</div>
            <div><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{request.email}</div>
            <div><b>Aadhar Number:</b>{request.aadharnumber}</div>
            <div><b>Mobile Number:</b>{request.mobilenumber}</div>
            <div><b>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>{request.address}</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <button style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleApprove(request._id)}>Approve</button>
              <button style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }} onClick={() => handleDecline(request._id)}>Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountRequests;
