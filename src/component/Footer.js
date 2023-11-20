import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'rgba(144, 238, 144, 0.25)' }}>
      <p>Follow us on:</p>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
      {/* Add more social links as needed */}
    </footer>
  );
}

export default Footer;
