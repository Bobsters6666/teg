import React from "react";
import Dashboard from "../../assets/dashboard.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-inner-container">
        <div>
          <h1>
            Validate Your <span className="purple">Mobile App Idea</span> before
            Investing Time and Money
          </h1>
          <p>
            Assess market viability for your idea to build a mobile app that
            satisfies your target audience.
          </p>
          <button>See How it Works</button>
        </div>
        <img src={Dashboard} alt="" className="dashboard-img" />
      </div>
    </div>
  );
};

export default Hero;
