import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/logo.png" alt="Little Lemon" />
      </div>
      <div className="footer-links">
        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
