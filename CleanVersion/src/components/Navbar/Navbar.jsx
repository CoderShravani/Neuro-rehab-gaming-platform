import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/programs', label: 'Treatment Programs' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/addimage/logo.png" alt="NeuroRehab Logo" className="nav-logo" />
          <span className="logo-text">NeuroRehab</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
              <span className="link-underline"></span>
            </Link>
          ))}
          <Link to="/notifications" className="notification-bell">
            <i className="fas fa-bell"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
