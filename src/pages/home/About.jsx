import React from "react";

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Adrian and Mario are the passionate chefs behind Little Lemon...</p>
      </div>
      <div className="about-images">
        <img src="/adrian.jpg" alt="Adrian" />
        <img src="/mario.jpg" alt="Mario" />
      </div>
    </section>
  );
};

export default About;
