import React from "react";
import "./Work.css";
import Navbar from "../components/Navbar";
import ProjectsBox from "../components/Projects-box";
import Rainbow from "../components/Rainbow";
import Laundary from "../components/Laundary";
import Footer from "../components/Footer";
import scrollIcon from '../assets/Images/Image [icon-scroll-down].svg';

const Work = () => {
  return (
    <div className="work-page">
      <Navbar />

      {/* Hero Section */}
      <div className="box">
        <div className="rectangle"></div>
        <div className="apple-bar">
          <div className="apple-dot dot-red"></div>
          <div className="apple-dot dot-yellow"></div>
          <div className="apple-dot dot-green"></div>
          <div className="plus-button">+</div>
        </div>

        <div className="ac-rectangle">
          <h1 className="hero-title">
            I craft experiences,<br />
            interfaces & <span className="soln">solutions.</span>
          </h1>
          <p className="hero-subtitle">
            I bring creativity, user-centric designs, and emerging tech into one place.
          </p>
          <p className="status">
            <span className="status-desktop-only">
            <br />
          </span>
  {/* Formerly at Kinesis Lab <span  className="status2">, IIT Guwahati and SharkIn.</span> */}
          <p className="status3">Former SDE Intern at Bluestock Fintech.</p>
</p>
        </div>
      </div>
      
     <div className="scroll-container">
        <img src={scrollIcon} alt="Scroll down icon" className="arrow" />
        <h2 className="selected-work-title">Selected Work '25</h2>
      </div>
      {/* Project Components */}
      <ProjectsBox />
      <Rainbow />
      <Laundary />

      {/* Footer inside work-page to ensure gradient covers it */}
      <Footer />
    </div>
  );
};

export default Work;
