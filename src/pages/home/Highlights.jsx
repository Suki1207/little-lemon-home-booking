import React from "react";
import { Link } from "react-router-dom";

import GreekSalad from "../../assets/greek salad.jpg";
import Bruchetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

import "./Highlights.css";

const Highlights = () => {
  return (
    <section className="highlights" id="specials">
      <div className="section-header">
        <h2>This weeks specials!</h2>
      </div>
      <div className="specials-grid">
        {/* Greek Salad */}
        <article className="special">
          <img src={GreekSalad} alt="Greek Salad" />
          <div>
            <h3>
              Greek Salad <span>$12.99</span>
            </h3>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <Link to="/order">Order a delivery 🚴</Link>
          </div>
        </article>

        {/* Bruschetta */}
        <article className="special">
          <img src={Bruchetta} alt="Bruschetta" />
          <div>
            <h3>
              Bruschetta <span>$5.89</span>
            </h3>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <Link to="/order">Order a delivery 🚴</Link>
          </div>
        </article>

        {/* Lemon Dessert */}
        <article className="special">
          <img src={LemonDessert} alt="Lemon Dessert" />
          <div>
            <h3>
              Lemon Dessert <span>$5.00</span>
            </h3>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <Link to="/order">Order a delivery 🚴</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlights;
