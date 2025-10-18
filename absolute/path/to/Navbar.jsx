import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Arnav Raj</h1>
        <span className="tagline">Product Designer</span>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link active">Work</Link>
        <Link to="/info" className="nav-link">Info</Link>
        <button className="rectangle-button"></button>
      </div>

      <div className="external-links">
        <a
          href="https://www.linkedin.com/in/arnav-raj-7a7296246/"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/drive/folders/136Os0Iyq4D61sJybNbFYByhAlsa0vW30"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
