import React from 'react';
import './Projects-box.css';
import reloadIcon from '../assets/Images/reload.png';
import Project3 from '../assets/Images/project3.png';
import Profile from '../assets/Images/Profile.png';

const Laundary = () => {
  return (
    <div className="box-one laundary-box">
      <div className="box-two">
        <h2 className="box-heading">Laundry Loop</h2>
        <p className="box-para">
          Simplifying laundry & ironing services for hostel and PG residents with a seamless digital experience.
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
          <img className="project1" src={Project3} alt="Laundry Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Laundary;
