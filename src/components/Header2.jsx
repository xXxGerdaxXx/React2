import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';

const Header2 = () => {
  // State to track dark mode (default is false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, check localStorage if dark mode is enabled
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'enabled') {
      document.body.classList.add('dark-mode'); // Apply dark mode class to body
      setIsDarkMode(true); // Set the state to true
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      // If dark mode is enabled, turn it off
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
      setIsDarkMode(false); // Update state
    } else {
      // Enable dark mode
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
      setIsDarkMode(true); // Update state
    }
  };

  return (
    <div className="wrapper-index2">
      <header className="header-index2">
        <div id="logo-index2">
        <a id="logo" href="/">
          <img src={logo} alt="Silicon Logotype" />
          <span className="logo-title-index2">Silicon</span> {/* Title next to logo */}
          </a>
        </div>

        <nav id="main-menu-index2" className="navbar-index2">
          <a className="nav-link-index2" href="#">Features</a>
          <a className="nav-link-index2" href="#">Contact</a> {/* Add Contact */}
        </nav>

        <div id="darkmode-toggle-switch-index2" className="btn-toggle-switch-index2">
          <span className="label-index2">Dark Mode</span> {/* Capitalized "Mode" */}
          <label htmlFor="darkmode-switch-index2" className="toggle-switch-index2">
            <input
              id="darkmode-switch-index2"
              type="checkbox"
              checked={isDarkMode} // Controlled input
              onChange={toggleDarkMode} // Event handler for toggling dark mode
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin-index2" href="#" className="btn-primary-index2">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>
      </header>
    </div>
  );
};

export default Header2;
