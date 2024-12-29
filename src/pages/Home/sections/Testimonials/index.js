import React from "react";
import ReviewCard from "../../../../components/ReviewCard";
import "./index.css";

const customers = [
  {
    fullName: "Enola Holmes",
    image: "./customer-photos/Enola-Holmes.jpg",
    rating: [1, 1, 1, 1, 0.5],
    says: `The food was amazing! The Mediterranean flavors were
      spot on. Loved the fresh ingredients and quick service!`,
  },
  {
    fullName: "Harry Potter",
    image: "./customer-photos/Harry-Potter.jpg",
    rating: [1, 1, 1, 1, 1],
    says: `A delightful experience! The lamb kebabs were tender and
      flavorful. Could use a bit more spice for my taste, though.`,
  },
  {
    fullName: "Coriolanus Snow",
    image: "./customer-photos/Coriolanus-Snow.jpg",
    rating: [1, 1, 1, 1, 0.5],
    says: `Incredible food! The hummus and pita bread were so fresh, and
      the baklava was a perfect dessert. Highly recommend!`,
  },
  {
    fullName: "Hermione Granger",
    image: "./customer-photos/Hermione-Granger.jpg",
    rating: [1, 1, 1, 1, 0],
    says: `Authentic Mediterranean cuisine! The seafood platter was
      delicious, though the wait time could be shorter.`,
  },
];

function Testimonials() {
  return (
    <section className="testimonial">
      <div className="container testimonial-container">
        <div className="testimonial-header">
          <h2>What people say about us!</h2>
        </div>
        <div className="review-card-container">
          {customers.map((customer, index) =>
            <ReviewCard key={index} reviewer={customer} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
