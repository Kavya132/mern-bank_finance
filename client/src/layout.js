import React from 'react';
import Navbar from './navbaradmin';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>Footer content goes here</footer>
    </div>
  );
};

export default Layout;
