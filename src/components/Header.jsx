import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Little Lemon logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <Link to="/booking">Order Online</Link>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
