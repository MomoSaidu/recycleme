// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>RecycleNow</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recycle-item">Recycle an Item</Link>
        <Link to="/where-to-recycle">Where to Recycle</Link>
        <Link to="/how-to-recycle">How to Recycle</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </nav>
    </header>
  );
}

export default Header;
