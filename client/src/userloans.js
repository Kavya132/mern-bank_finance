import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanRequests = () => {
    const [loanRequests, setLoanRequests] = useState([]);

    useEffect(() => {
        fetchLoanRequests();
    }, []);

    const fetchLoanRequests = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Authorization token not found');
                return;
            }

            const response = await axios.get('http://localhost:5000/userloans', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setLoanRequests(response.data);
        } catch (error) {
            console.error('Error fetching loan requests:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
            <h2>Loan Requests</h2>
            <div className="loan-request-container">
                {loanRequests.map(request => (
                    <div key={request._id} className="loan-request-box">
                        <div className="loan-request-details">
                            <div><strong>User Name:</strong> {request.email}</div>
                            <div><strong>Subject:</strong> {request.subject}</div>
                            <div><strong>Description:</strong> {request.description}</div>
                            <div><strong>Loan Amount:</strong> {request.loanAmount}</div>
                            <div><strong>Status:</strong> {request.status}</div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .loan-request-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-gap: 20px;
                }

                .loan-request-box {
                    border: 2px solid black; /* Black border */
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }

                .loan-request-details {
                    padding: 20px;
                }

                .loan-request-details div {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default LoanRequests;
