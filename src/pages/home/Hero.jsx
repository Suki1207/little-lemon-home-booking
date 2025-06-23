import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/hero.jpg" alt="Restaurant ambiance" />
      </div>
    </section>
  );
};

export default Hero;
