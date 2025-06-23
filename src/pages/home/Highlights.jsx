import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Highlights.css";

const Highlights = ({ specials }) => {
  return (
    <section className="highlights" id="specials">
      <div className="section-header">
        <h2>This weeks specials!</h2>
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <article className="special" key={special.title}>
            <img src={special.image} alt={special.title} />
            <div>
              <h3>
                {special.title} <span>{special.price}</span>
              </h3>
              <p>{special.description}</p>
              <Link to={special.link}>Order a delivery 🚴</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

Highlights.propTypes = {
  specials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Highlights;
