import React from "react";
import "./Footer.css";
// 1. Import 'Link' from react-router-dom
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="footer-section">
          <h3>MAIN</h3>
          {/* 2. Use 'Link' and 'to' for internal pages */}
          <Link to="/">Work</Link>
          <Link to="/info">Info</Link>
        </div>

        <div className="footer-section">
          <h3>CONTACTS</h3>
          {/* External links are still <a> tags. 
              It's good practice to add target="_blank" 
              to open them in a new tab. */}
          <a
            href="https://www.linkedin.com/in/prince-kumar-5ab306258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1yK7d9sGcR53a5BC0ohtKlQ3jPVltTOpd/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 Prince Kumar.</p>
      </div>
    </footer>
  );
};

export default Footer;