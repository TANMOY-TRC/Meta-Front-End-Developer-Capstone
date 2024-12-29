import React from "react";
import Hero from "./sections/Hero";
import WeekSpecials from "./sections/WeekSpecials";
import Testimonials from "./sections/Testimonials";
import AboutUs from "./sections/AboutUs";

function Home() {
  return (
    <>
      <Hero />
      <WeekSpecials />
      <Testimonials />
      <AboutUs />
    </>
  );
}

export default Home;
