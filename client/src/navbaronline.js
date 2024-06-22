import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the dashboard
  const isDashboard = location.pathname === '/onlinedash';
  const islogin = location.pathname === '/login';
  const isregister = location.pathname === '/register';

  // Conditionally render the navbar based on the route
  if (isDashboard || islogin || isregister) {
    return null; // Return null to not render anything if on the dashboard
  }

  return (
    <header style={{ backgroundColor: 'tomato', padding: '10px', color: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/Onlinedash" style={linkStyle}>Home</Link>
        <Link to="/Onlineaccount" style={linkStyle}>Create Account</Link>
        <Link to="/Loanrequestform" style={linkStyle}>loan request</Link>
        <Link to="/Transfer" style={linkStyle}>Transfer</Link>
        <Link to="/balancecheck" style={linkStyle}>Check Balance</Link>
       
        <Link to="/login" style={linkStyle}>Logout</Link> {/* Logout button */}
      </nav>
    </header>
  );
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
