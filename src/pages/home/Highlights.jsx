import React from "react";

import "./Highlights.css";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="section-header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-grid">
        {/* Each special as an article */}
        <article className="special">
          <img src="/greek-salad.jpg" alt="Greek Salad" />
          <div>
            <h3>Greek Salad</h3>
            <p>Delicious salad with crisp vegetables...</p>
            <a href="#">Order Delivery</a>
          </div>
        </article>
        {/* Repeat for other specials */}
      </div>
    </section>
  );
};

export default Highlights;
