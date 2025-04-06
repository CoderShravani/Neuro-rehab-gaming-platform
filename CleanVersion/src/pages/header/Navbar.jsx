import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">Welcome to Your Healing Space</h2>
        <p className="tagline">
          <span className="play">PLAY</span> |
          <span className="heal"> HEAL</span> |
          <span className="thrive"> THRIVE</span>
        </p>
      </div>
      <div className="navbar-right">
        <div className="notification">
          <span className="bell-icon">🔔</span>
          <span className="notification-dot"></span>
        </div>
        <Link to="/login" className="nav-btn login-btn">
          Login
        </Link>
        <Link to="/signup" className="nav-btn signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
