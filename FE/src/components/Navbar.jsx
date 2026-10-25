import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="main-navbar-wrapper">
      <div className="container">
        <div className="navbar-card">
          <a href="/" className="navbar-logo">
            <span className="logo-peh">peh</span>
            <span className="logo-tani">tani</span>
          </a>

          <div className="navbar-right">
            <nav className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="/tentang" onClick={() => setMobileMenuOpen(false)}>
                Tentang Website
              </a>
            </nav>

            <button
              className="navbar-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
