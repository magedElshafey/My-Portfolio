import React from "react";
import Hero from "../Components/Home/hero/Hero";

import About from "../Components/Home/about/About";
import SkillsDetails from "../Components/Home/Skills/SkillsDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsDetails />
    </div>
  );
};

export default Home;
