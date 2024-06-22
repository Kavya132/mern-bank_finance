import React, { useState } from 'react';
import axios from 'axios';

const LoanRequestForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        aadharNumber: '',
        subject: '',
        description: '',
        loanAmount: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/loanrequestform', formData);
            alert('Loan requested succesfully');
            console.log(response.data);
            // Handle success (e.g., show success message)
        } catch (error) {
            console.error('Error submitting loan request:', error);
            // Handle error (e.g., show error message)
        }
    };

    // Internal CSS styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Set minimum height to fill the viewport
            background: 'lavender', // Linear gradient background
            color: 'black',
            fontFamily: 'Arial, sans-serif'
        },
        formContainer: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column'
        },
        input: {
            margin: '10px',
            padding: '12px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            outline: 'none'
        },
        textarea: {
            margin: '10px',
            padding: '12px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            resize: 'vertical'
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
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Loan Request Form</h2>
            <div style={styles.formContainer}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="User Email"
                        required
                    />
                    <input
                        type="text"
                        name="aadharNumber"
                        value={formData.aadharNumber}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Aadhar Number"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={styles.textarea}
                        placeholder="Description"
                        required
                    />
                    <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Loan Amount"
                        required
                    />
                    <button
                        type="submit"
                        style={{ ...styles.button, ...styles.buttonHover }}
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoanRequestForm;