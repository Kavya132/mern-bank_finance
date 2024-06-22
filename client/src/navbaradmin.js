import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the dashboard
  const isDashboard = location.pathname === '/dashboard';
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  const isOnlineDash = location.pathname === '/onlinedash';
  const isOnlineAccount = location.pathname === '/onlineaccount';
  const isLoanRequestForm = location.pathname === '/loanrequestform';
  const isTransfer = location.pathname === '/transfer';
  const isBalanceCheck = location.pathname === '/checkbalance';
  const isuserloans = location.pathname === '/userloans';
  const isonlinetransactions = location.pathname === '/onlinetransactions';
  

  const ishome =location.pathname==='/';

  // Conditionally render the navbar based on the route
  if (isDashboard || isLogin || isRegister || isOnlineDash || ishome) {
    return null; // Return null to not render anything if on the dashboard
  }

  if (isOnlineAccount || isLoanRequestForm || isTransfer || isBalanceCheck || isuserloans || isonlinetransactions) {
    return (
      <header style={{ backgroundColor: 'black', padding: '10px', color: 'white' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/onlinedash" style={linkStyle}>Home</Link>
          <Link to="/onlineaccount" style={linkStyle}>Create Account</Link>
          <Link to="/loanrequestform" style={linkStyle}>Loan Request</Link>
          <Link to="/transfer" style={linkStyle}>Transfer</Link>
          <Link to="/checkbalance" style={linkStyle}> Balance</Link>
          <Link to="/userloans" style={linkStyle}> userloans</Link>
          <Link to="/onlinetransactions" style={linkStyle}> transactions</Link>
          <Link to="/login" style={linkStyle}>Logout</Link> {/* Logout button */}
        </nav>
      </header>
    );
  } else {
    return (
      <header style={{ backgroundColor: 'black', padding: '10px', color: 'white' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/dashboard" style={linkStyle}>Home</Link>
          <Link to="/new-account" style={linkStyle}>Create Account</Link>
          <Link to="/withdrawl" style={linkStyle}>Withdraw</Link>
          <Link to="/deposit" style={linkStyle}>Deposit</Link>
          <Link to="/balance" style={linkStyle}>Check Balance</Link>
          <Link to="/transactions" style={linkStyle}>View Transactions</Link>
          <Link to="/onlineaccounts" style={linkStyle}>View Account Requests</Link>
          <Link to="/loanrequests" style={linkStyle}>View Loan Requests</Link>
          <Link to="/login" style={linkStyle}>Logout</Link> {/* Logout button */}
          <Link to="/closeaccount" style={linkStyle}>Close Account</Link>
        </nav>
      </header>
    );
  }
};

const linkStyle = {
  padding: '10px 20px',
  color: 'white',
  textDecoration: 'none',
  border: '2px solid white',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

export default Navbar;
