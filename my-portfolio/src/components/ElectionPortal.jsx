import React from 'react';
import './ElectionPortal.css';
import reloadIcon from '../assets/Images/reload.png';
import Project2 from '../assets/Images/Portal.png';
import Profile from '../assets/Images/Profile.png';

const ElectionPortal = () => {
  return (
    
    <div className="box-one rainbow-box">
      <div className="box-two">
        <h2 className="box-heading">Election Portal</h2>
        <p className="box-para">
          Under-Devlopment! Coming Soon
        </p>
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
          <img className="project1" src={Project2} alt="Rainbow Screenshot" />
        </div>
      </div>
    </div>
    
  );
};

export default ElectionPortal;
