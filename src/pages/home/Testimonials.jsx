import React from "react";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        <article className="testimonial">
          <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
          <p>Amazing food!</p>
          <div className="profile">
            <img src="/user1.jpg" alt="User 1" />
            <p>User Name</p>
          </div>
        </article>
        {/* Repeat for other testimonials */}
      </div>
    </section>
  );
};

export default Testimonials;
