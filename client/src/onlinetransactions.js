import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OnlineTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Authorization token not found');
                return;
            }

            const response = await axios.get('http://localhost:5000/onlinetransactions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'lavender', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
            <h2 style={{ color: 'blue', textAlign: 'center' }}>Online Transactions</h2>
            <table style={{ width: '60%', border: '5px solid blue' }}>
                <thead style={{ backgroundColor: 'lightblue', color: 'blue', fontWeight: 'bold' }}>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Recipient</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction._id}>
                            <td style={{ textAlign: 'center' }}>{transaction.timestamp}</td>
                            <td style={{ textAlign: 'center' }}>{transaction.amount}</td>
                            <td style={{ textAlign: 'center' }}>{transaction.receiverEmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OnlineTransactions;
