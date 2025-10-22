import React from "react";
import "./Info.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

import firstone from "../assets/Images/firstone.jpeg";
import second from "../assets/Images/second.jpeg";
import photo1 from "../assets/Images/third.jpeg";
import photo2 from "../assets/Images/fourthh.jpeg";
import fourth from "../assets/Images/fifth.jpeg";
import sixth from "../assets/Images/sixth.jpeg";
import seventh from "../assets/Images/seventh.jpeg";
import eight from "../assets/Images/eight.jpeg"

const Info = () => {
  return (
    <div className="info-page">
      <Navbar />

      <div className="overlay">
        <p className="about-me">About Me</p>
        <div className="heading-container">
          <h1>
            I'm passionate about blending technology and
            <span>development to create intuitive experiences that</span>
            <span>connect with people.</span>
          </h1>
        </div>
      </div>

      {/* First pair of cards */}
      <Card
        leftImg={firstone}
        leftTitle="Wait, I'm an Engineer?"
        leftText="I'm a fourth-year CSE student at IIITG (Class of 2026 yes, I still survive on caffeine and console.logs). I figured building responsive websites is more fun than responding to hardware errors. Now I spend my days turning divs into dreams and bugs into features. You're welcome, internet."
        rightImg={second}
        rightText="Here's my story!"
      />

      {/* Second pair of cards */}
      <Card
        leftImg={photo1}
        leftTitle="How I Accidentally Became a Photographer"
        leftText="It all started with me messing around in Pro Mode on my mom’s phone, because why trust auto when you can manually ruin your own shots? One YouTube tutorial later, I went from “how to use ISO” to “explaining the 9+1 golden rules” to juniors like a seasoned pro. I mostly love capturing animals (they don’t blink mid-shot), but college folks never got the memo. They hand me their phones like I’m their personal DSLR. Still, I’ve clicked some pretty cool shots, and even won the title of Best Photojournalist at an E-Cell event. Not bad for a guy who started out arguing with his phone’s exposure settings."
        rightImg={photo2}
        rightText="BTW, I’m a good photographer too."
      />

      {/* Third pair of cards */}
      <Card
        leftImg={sixth}
        leftTitle="How I Started Development"
        leftText="Let’s just say I stumbled into web development after years of yelling at websites that broke if you so much as blinked wrong. One day, it hit me maybe someone should care if the internet actually works for people (radical idea, I know). So, I ditched my old design job where “can you make it more web 3.0?” was considered solid feedback for the chaotic beauty of code. Broken layouts? Plenty. Sleepless nights chasing a rogue semicolon? More than I’d like to admit. Competence? Lightly toasted. But hey, at least I’m not deploying sites that crash harder than Internet Explorer on a good day."
        rightImg={fourth}
        rightText="Frontend was my messy situationship."
      />

      {/* Fourth pair of cards */}
      
      <Card
        leftImg={seventh}
        leftTitle="In My Spare Time…"
        leftText="When I’m not coding, I’m usually busy pretending to be an esports superstar—yes, I’ve dominated in games, and no, I still won’t sign autographs. And when I’m not gaming, you’ll probably find me asleep"
        rightImg={eight}
        rightText="Life After console.log()"
      />

      <Footer />
    </div>
  );
};

export default Info;
