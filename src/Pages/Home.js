import React from "react";
import Hero from "../Components/Home/hero/Hero";

import About from "../Components/Home/about/About";
import SkillsDetails from "../Components/Home/Skills/SkillsDetails";
import Servies from "../Components/Home/Services/Servies";
import Statistics from "../Components/Home/Statistics/Statistics";
import Projects from "../Components/Home/Projects/Projects";
import Ideas from "../Components/Home/Ideas/Ideas";

const Home = () => {
  return (
    <div>
      <Ideas />
      <Hero />
      <Servies />
      <About />
      <Projects />
      <SkillsDetails />
    </div>
  );
};

export default Home;
