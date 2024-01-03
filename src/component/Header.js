import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/Untitled.jpeg'; // Update the path to your image

/**
 * Header component for the application.
 * Displays a logo and navigation links.
 */
function Header() {
  return (
    <div className="header">
      {/* Logo with a link to the home page */}
      <h1 className="title">
        <Link to="/">
          <img
            src={logoImage}
            alt="RecycleNow Logo"
            style={{ width: '200px', height: 'auto' }}
          />
        </Link>
      </h1>

      {/* Navigation links */}
      <nav className="navbar">
        <Link className="nav-link" to="/recycle-item">
          Recycle Item
        </Link>
        <Link className="nav-link" to="/where-to-recycle">
          Where To Recycle
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/news">
          News
        </Link>
        <Link className="nav-link" to="/shop">
          Support Us
        </Link>
      </nav>
    </div>
  );
}

export default Header;
