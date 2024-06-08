// Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear}, Streamfy. All rights reserved.</p>
    </footer>
  );
}

// Styles
const footerStyle = {
  background: '#008b8b',
  color: '#f0fff0',
  textAlign: 'center',
  padding: '10px 0',
};

export default Footer;