import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">FOX</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/#services">Service</Link>
          <Link to="/#portfolio">Portfolio</Link>
          <button className="btn nav-btn">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
