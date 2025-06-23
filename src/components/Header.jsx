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
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <Link to="/booking" target="_blank" rel="noopener noreferrer">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/home">Testimonials</Link>
          </li>
          <li>
            <Link to="/home">About</Link>
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
