import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanRequests = () => {
    const [loanRequests, setLoanRequests] = useState([]);

    useEffect(() => {
        fetchLoanRequests();
    }, []);

    const fetchLoanRequests = async () => {
        try {
            const response = await axios.get('http://localhost:5000/loanrequests');
            setLoanRequests(response.data);
        } catch (error) {
            console.error('Error fetching loan requests:', error);
        }
    };

    const handleApprove = async (id) => {
        try {
            await axios.put(`http://localhost:5000/loanrequests/${id}/approve`);
            // Update loan request status locally
            setLoanRequests(prevLoanRequests => {
                return prevLoanRequests.map(request => {
                    if (request._id === id) {
                        request.status = 'approved';
                    }
                    return request;
                });
            });
        } catch (error) {
            console.error('Error approving loan request:', error);
        }
    };

    const handleDecline = async (id) => {
        try {
            await axios.put(`http://localhost:5000/loanrequests/${id}/decline`);
            // Update loan request status locally
            setLoanRequests(prevLoanRequests => {
                return prevLoanRequests.map(request => {
                    if (request._id === id) {
                        request.status = 'declined';
                    }
                    return request;
                });
            });
        } catch (error) {
            console.error('Error declining loan request:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ border: '4px double black', borderRadius: '10px', padding: '10px' }}>
                <div style={{ maxWidth: '800px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Loan Requests</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>User Name</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Subject</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Description</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Loan Amount</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Status</th>
                                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanRequests.map(request => (
                                <tr key={request._id}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{request.email}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{request.subject}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{request.description}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{request.loanAmount}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{request.status}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                                        {request.status === 'Pending' && (
                                            <>
                                                <button style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer', marginRight: '5px' }} onClick={() => handleApprove(request._id)}>Approve</button>
                                                <button style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }} onClick={() => handleDecline(request._id)}>Decline</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LoanRequests;
