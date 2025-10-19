import React from 'react';
import './Laundary.css'; // ✅ CORRECTED: Imports its own CSS file
import Project3 from '../assets/Images/project3.png';

const Laundary = () => {
  return (
    // The classes 'box-one' and 'laundary-box' are correct
    <div className="box-one laundary-box">
      <div className="box-two">
        {/* ✅ ADDED: Wrapper for the text to enable flexbox layout */}
        <div className="box-two-text">
          <h2 className="box-heading">Laundry Loop</h2>
          <p className="box-para">
            Simplifying laundry & ironing services for hostel and PG residents with a seamless digital experience.
          </p>
        </div>
        <span className="icon1">→</span>
      </div>
      <div className="box-3">
        <img className="project1" src={Project3} alt="Laundry Loop project screenshot" />
      </div>
    </div>
  );
};

export default Laundary;

