import React from 'react';
import './Projects-box.css';
import reloadIcon from '../assets/Images/reload.png';
import Portal from '../assets/Images/Portal.png';
import Profile from '../assets/Images/Profile.png';

const ProjectsBox = () => {
  return (
    <div className="box-one projects-box">
      <div className="box-two">
        <div className="box-two-text">
          <h2 className="box-heading">Voting Portal</h2>
          <p className="box-para">
            IIITG, '24 — Streamlining secure and seamless elections for the campus community.
          </p>
        </div>
        <span className="icon1">→</span>
      </div>

      <div className="box-3">
        <div className="small-box"></div>

        <div className="apple-bar1">
          <div className="apple-dot dot-red"></div>
          <div className="apple-dot dot-yellow"></div>
          <div className="apple-dot dot-green"></div>
          <div className="plus-button-one">+</div>
        </div>

        <div className="box-4">
          <div className="browser-icons">
            <span className="icon">←</span>
            <span className="icon">→</span>
            <img className="reload" src={reloadIcon} alt="Reload Icon" />
            <img className="profile" src={Profile} alt="Profile Icon" />
            <div className="small-box-4"></div>

            <div className="three-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <div className="box-5"></div>

        <div className="election-project">
          <img className="project1" src={Portal} alt="Voting Portal Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsBox;
