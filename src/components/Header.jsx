import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">
          <img src={Logo} alt="Little Lemon logo" />
        </Link>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Specials</Link>
          </li>
          <li>
            <Link to="/booking">Order Online</Link>
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
