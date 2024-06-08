import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="header">
      <Link to="/" title="Logo" className="logo-link">
        <img src='./src/assets/logo192.png' alt='Logo' className="logo" />
      </Link>
      <nav className="nav-desktop">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <div className="nav-mobile">
        <button
          onClick={toggleMenu}
          className="menu-button"
          aria-label="Toggle menu"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <ul className="menu-container">
            <li><Link to="/" className="menu-item" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="menu-item" onClick={closeMenu}>About</Link></li>
            <li><Link to="#" className="menu-item" onClick={closeMenu}>Contact</Link></li>
          </ul>
        )}
      </div>
      <div className="auth-buttons">
        <Link to="/signin" className="auth-link" onClick={closeMenu}>Sign In</Link>
        <Link to="/signup" className="auth-link" onClick={closeMenu}>Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;