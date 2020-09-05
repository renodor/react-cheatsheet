import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul>
          <li><Link className="section-link" to={'/html'}>HTML</Link></li>
          <li><Link className="section-link" to={'/javascript'}>JS</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
