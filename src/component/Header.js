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
        <Link className="nav-link" to="/recycle-item">Recycle Item</Link>
        <Link className="nav-link" to="/where-to-recycle">Where To Recycle</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/news">News</Link>
      </nav>
    </div>
  );
}

export default Header;
