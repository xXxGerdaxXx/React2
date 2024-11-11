import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import MobileMenuButton from './MobileMenuButton';
import SignInButton from './SignInButton'; 
import '../index.css';

const Header = ({ isContactPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'enabled') {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isContactPage ? 'header-contact' : ''}`}>
      <div className="container">
        <a id="logo" href="/">
          <img src={logo} alt="Silicon Logotype" />
          <span className="logo-title">Silicon</span>
        </a>

        <nav id="main-menu" className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="/contact">Contact</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <MobileMenuButton onClick={toggleMenu} />

        <SignInButton /> 
      </div>
    </header>
  );
};

export default Header;
