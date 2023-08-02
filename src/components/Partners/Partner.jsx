import React from "react";
import "./Partner.css";
import Sponsor1 from "../../assets/Sponsor1.png";
import Sponsor2 from "../../assets/Sponsor2.png";
import Sponsor3 from "../../assets/Sponsor3.png";
import Sponsor4 from "../../assets/Sponsor4.png";
import Sponsor5 from "../../assets/Sponsor5.png";

const Partner = () => {
  return (
    <div className="partner-container">
      <div>
        <h2>
          Unleash Insights. <span className="purple">Empower Decisions.</span>{" "}
          Without the Costs
        </h2>
        <p>
          Discover the market value of your mobile app idea without excessive
          development costs. Tegic helps you validate your concept to ensure
          product market fit.
        </p>
        <button>Start Validating Your Idea</button>

        <p className="sponsor-title">Trusted By Top Mobile App Startups</p>
        <div className="sponsor-container">
          <img src={Sponsor1} alt="" />
          <img src={Sponsor2} alt="" />
          <img src={Sponsor3} alt="" />
          <img src={Sponsor4} alt="" />
          <img src={Sponsor5} alt="" />
        </div>

        <p className="trusted-app-title">#1 TRUSTED APP VALIDATION COMPANY</p>
        <h2>
          We Provide Guidance to Launch a{" "}
          <span className="purple">Successful Mobile App Development</span>
        </h2>
        <p>
          We will assist in validating your idea and conduct a comprehensive
          market analysis. This will empower you to gain insights into the total
          addressable market for your mobile app idea.
        </p>
      </div>
    </div>
  );
};

export default Partner;
