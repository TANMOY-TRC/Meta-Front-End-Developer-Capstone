import React from "react";
import { Link } from "react-router-dom";
import MealCard from "../../../../components/MealCard";
import "./index.css";
import pages from "../../../../utils/pages";

const meals = [
  {
    name: "Greek Salad",
    image: "./images/greek-salad.jpg",
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: "./images/bruschetta.jpg",
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: "./images/lemon-dessert.jpg",
    price: "$5.00",
    description: `This comes straight from grandma"s recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

function WeekSpecials() {
  return (
    <section className="week-specials">
      <div className="container week-specials-container">
        <div className="week-specials-header">
          <h2>This weeks specials!</h2>
          <Link className="button-primary" to={pages.get("menu").path}>
            Online Menu
          </Link>
        </div>
        <div className="meal-card-container">
          {meals.map((meal, index) =>
            <MealCard key={index} item={meal} />
          )}
        </div>
      </div>
    </section>
  );
}

export default WeekSpecials;
