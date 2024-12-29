import React from "react";
import "./index.css";

const story = [
  `We're a vibrant Mediterranean-inspired
  restaurantpassionate about bringing you authentic flavors
  and a warm, inviting atmosphere. Our menu features a
  selection of delicioussmall plates, handcrafted pasta
  dishes, and grilled specialties, all made with fresh,
  high-quality ingredients. Come savor thetaste of the
  Mediterranean with us!`,
  `Little Lemon was born from a love of travel and a passion
  forsharing the vibrant flavors of the Mediterranean. We
  believethat dining should be an experience - a celebration
  of good food, good company, and the simple joys of life. So
  come, gather with friends and family, and let us transport
  you to the sun-drenched shores of the Mediterranean.`
];

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container about-us-container">
        <article className="about-us-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-us-story">
            {story.map((paragraph, index) =>
              <span key={index}>{paragraph}</span>
            )}
          </p>
        </article>
        <div className="about-us-images">
          <div className="image-group">
            <img
              className="image1"
              src="./images/restaurant.jpg"
              alt="Restaurant-Image"
            />
            <img
              className="image2"
              src="./images/chefs.jpg"
              alt="Restaurant-Chefs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
