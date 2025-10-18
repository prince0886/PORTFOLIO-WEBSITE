import React from "react";
import "./Card.css";

const Card = ({ leftImg, leftTitle, leftText, rightImg, rightText }) => {
    return (
        <div className="card-container-wrapper">
            {/* Left Card: Image THEN Text */}
            <div className="card-container left-card">
                <div className="card">
                    <img 
                        className="card-img-top" 
                        src={leftImg} 
                        alt={leftTitle || "Left Card Image"} 
                    />
                    <div className="card-body">
                        {leftTitle && <p className="card-text1">{leftTitle}</p>}
                        {leftText && <p className="card-text">{leftText}</p>}
                    </div>
                </div>
            </div>

            {/* Right Card: Text THEN Image */}
            <div className="card-container right-card">
                <div className="card">
                    <div className="card-body1">
                       {rightText && <p className="card-text2">{rightText}</p>}
                    </div>
                    <img 
                        className="card-img-top1" 
                        src={rightImg} 
                        alt={rightText || "Right Card Image"} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;