import React from "react";
import "./Info.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

import screenshot1 from "../assets/Images/Screenshot 2025-03-27 191740.png";
import screenshot2 from "../assets/Images/Screenshot 2025-03-27 191748.png";
import photo1 from "../assets/Images/PHOTO (1).png";
import photo2 from "../assets/Images/PHOTO (2).png";
import fourth from "../assets/Images/fourth.png";
import third from "../assets/Images/third.png";

const Info = () => {
  return (
    <div className="info-page">
      <Navbar />

      <div className="overlay">
        <p className="about-me">About Me</p>
        <div className="heading-container">
          <h1>
            I'm passionate about blending technology and
            <span>design to create intuitive experiences that</span>
            <span>connect with people.</span>
          </h1>
        </div>
      </div>

      {/* First pair of cards */}
      <Card
        leftImg={screenshot1}
        leftTitle="Wait, I'm an Engineer?"
        leftText="Look, I'm a third-year ECE student at IIITG (graduating in 2026, please clap). Let's just say circuits and transistors didn't spark joy. Instead of designing motherboards, I decided to design things that don't electrocute people. You're welcome, humanity."
        rightImg={screenshot2}
        rightText="Here's my story, accompanied by snapshots from my recent trip to Ooty."
      />

      {/* Second pair of cards */}
      <Card
        leftImg={photo1}
        leftTitle="How I Discovered UX"
        leftText="Let's just say I stumbled into this field after years of rage-quitting apps that treated users like unpaid beta testers. One day, I realizedsomeonehad to care about humans in “human-computer interaction” (wild concept, I know). So, I traded my graphic design gig—where clients thought “make it pop” was actionable feedback—for UI/UX. Failed prototypes? A few dozen. Ego? Bruised. Competence?Lightly seasoned, like a mediocre stir-fry. But hey, at least I’m not designing buttons that look like they’ll trigger the apocalypse."
        rightImg={photo2}
        rightText="Graphic Design Was My Toxic Ex"
      />

      {/* Third pair of cards */}
      <Card
        leftImg={third}
        leftTitle="In My Spare Time…"
        leftText="I'm either:
        A) Pretending to be a cricket superstar (yes, I'm in the college team, no, I won't sign autographs).
        B) Taking~aesthetic~photos of random things, like a failed paparazzo.
        C) Arguing with my camera about why itstillthinks f/1.8 is “too much bokeh.”"
        rightImg={fourth}
        rightText="Here's my story, accompanied by snapshots from my recent trip to Ooty."
        
      />

     <Footer />
    </div>
  );
};

export default Info;
