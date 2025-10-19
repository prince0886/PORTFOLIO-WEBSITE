import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Keep using location
  const [activeTab, setActiveTab] = useState("work");
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  const workRef = useRef(null);
  const infoRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const menuRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/info") setActiveTab("info");
    else setActiveTab("work");
  }, [location.pathname]);

  useEffect(() => {
    // Logic for slider (desktop/mobile)
    if (window.innerWidth > 768) {
      // Desktop slider logic
      const ref = activeTab === "work" ? workRef.current : infoRef.current;
      if (ref) {
        setHighlightStyle({
          width: "80px", // Keep your desktop width
          left: ref.offsetLeft + (ref.offsetWidth / 2 - 40) + "px", // Adjust offset based on new width
          transition: "all 0.3s ease",
          // Reset mobile styles explicitly if needed
          height: '34px', // Original desktop height
          backgroundColor: '#575757' // Original desktop color
        });
      }
    } else {
      // Mobile slider logic (using CSS variables as requested)
      if (activeTab === "work") {
        setHighlightStyle({
          width: "42%",
          height: "74%",
          left: "5%",
          backgroundColor: "rgba(242, 242, 242, 0.1)", // Using var(--color-grey-955) equivalent
          transition: "all 0.3s ease",
        });
      } else { // activeTab === 'info'
        setHighlightStyle({
          width: "42%",
          height: "74%",
          left: "55%",
          backgroundColor: "rgba(242, 242, 242, 0.1)", // Using var(--color-grey-955) equivalent
          transition: "all 0.3s ease",
        });
      }
    }
  }, [activeTab]); // Rerun when activeTab changes

  useEffect(() => {
    // Logic to close the menu when clicking outside
    const handleClickOutside = (event) => {
      if (mobileLinksOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileLinksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileLinksOpen]);

  return (
    <nav className="navbar">
      {/* ✅ Add conditional class based on location.pathname */}
      <div className={`navbar-brand ${location.pathname === "/info" ? 'hide-on-info-mobile' : ''}`}>
        <h1>Prince Kumar</h1>
        <span className="tagline">Frontend Developer</span>
      </div>

      <div className="nav-links">
        <Link
          ref={workRef}
          to="/"
          className={`nav-link ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </Link>
        <Link
          ref={infoRef}
          to="/info"
          className={`nav-link ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          Info
        </Link>
        <div className="rectangle-button" style={highlightStyle}></div>
      </div> 

      <div className="external-links-container" ref={menuRef}>
        <button
          className={`mobile-links-trigger ${mobileLinksOpen ? 'active' : ''}`}
          onClick={() => setMobileLinksOpen(!mobileLinksOpen)}
          aria-label="Toggle social links menu"
        >
          @
        </button>
        <div className={`external-links ${mobileLinksOpen ? 'mobile-active' : ''}`}>
          <a href="https://www.linkedin.com/in/arnav-raj-7a7296246/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://drive.google.com/drive/folders/136Os0Iyq4D61sJybNbFYByhAlsa0vW30" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;