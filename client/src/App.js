import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.js';
import Login from './login.js';
import Register from './registerForm.js';
import AccountCreation from './create-account.js';
import Dashboard from './dashboard.js';
import Deposit from './deposit.js';
import Withdrawl from './withdrawl.js';
import Balance from './balance.js';
import Transactions from './transactions.js';
import OnlineAccount from './onlineaccount.js';
import OnlineAccounts from './onlineaccounts.js';
import Loanrequestform from './loanrequestform.js';
import Loanrequests from './loanrequests.js';
import Onlinedash from './onlinedash.js';
import Transfer from './transfer.js';
import Checkbalance from './checkbalance.js';
import Logout from './login.js';
import Userloans from './userloans.js';
import Onlinetransactions from './onlinetransactions.js';
import Navbar from './navbaradmin'; // Import your Navbar component
import Closeaccount from './closeaccount.js';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/new-account" element={<AccountCreation />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/deposit" element={<Deposit />} />
            <Route exact path="/withdrawl" element={<Withdrawl />} />
            <Route exact path="/balance" element={<Balance />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/OnlineAccount" element={<OnlineAccount />} />
            <Route exact path="/OnlineAccounts" element={<OnlineAccounts />} />
            <Route exact path="/Loanrequestform" element={<Loanrequestform />} />
            <Route exact path="/Loanrequests" element={<Loanrequests />} />
            <Route exact path="/Onlinedash" element={<Onlinedash />} />
            <Route exact path="/Transfer" element={<Transfer />} />
            <Route exact path="/checkbalance" element={<Checkbalance />} />
            <Route exact path="/login" element={<Logout />} />
            <Route exact path="/userloans" element={<Userloans />} />
            <Route exact path="/onlinetransactions" element={<Onlinetransactions/>} />
            <Route exact path="/closeaccount" element={<Closeaccount/>} />
          </Routes>
        
      </Router>
    </div>
  );
};

export default App;
