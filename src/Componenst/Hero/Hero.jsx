import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import profile_img1 from "../../assets/profile_img1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  
  return (
    <div  id="home"className="hero">
      <img src={profile_img1} alt="" />
      <h1><span> I'm Todsapon Meepon  </span></h1>
     
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link"offset={50} href="#contact">  Connect With me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
