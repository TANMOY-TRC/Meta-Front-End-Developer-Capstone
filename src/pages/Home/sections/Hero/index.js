import React from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import pages from "../../../../utils/pages";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={pages.get("reservations").path}>
            Reserve a Table
          </Link>
        </div>
        <img
          className="hero-image"
          src="./images/restaurant-food.jpg"
          alt="Restaurant Food"
        />
      </div>
    </section>
  )
}

export default Hero;
