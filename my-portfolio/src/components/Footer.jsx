import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="footer-section">
          <h3>MAIN</h3>
          <a href="index.html">Work</a>
          <a href="info.html">Info</a>
        </div>

        <div className="footer-section">
          <h3>CONTACTS</h3>
          <a href="https://www.linkedin.com/in/arnav-raj-7a7296246/">LinkedIn</a>
          <a href="https://drive.google.com/drive/folders/136Os0Iyq4D61sJybNbFYByhAlsa0vW30">Resume</a>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 Arnav Raj.</p>
      </div>
    </footer>
  );
};

export default Footer;
