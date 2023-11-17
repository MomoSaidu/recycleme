// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <Link to="/">
          <img
            src="Untitled.jpeg" // Update the path to your image
            alt="RecycleNow Logo"
            style={{ width: '200px', height: 'auto' }}
          />
        </Link>
      </h1>
      <nav className="navbar">
        <Link to="/recycle-item">Recycle Item</Link>
        <Link to="/where-to-recycle">Where To Recycle</Link>
        <Link to="/how-to-recycle">How To Recycle</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
}

export default Header;
