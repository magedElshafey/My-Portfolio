import React from "react";
import Hero from "../Components/Home/hero/Hero";

import About from "../Components/Home/about/About";
import SkillsDetails from "../Components/Home/Skills/SkillsDetails";
import Servies from "../Components/Home/Services/Servies";
import Statistics from "../Components/Home/Statistics/Statistics";
import Projects from "../Components/Home/Projects/Projects";
import Ideas from "../Components/Home/Ideas/Ideas";
import Contact from "../Components/Home/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Ideas />
      <Hero />
      <About />
      <SkillsDetails />
      <Projects />
      <Servies />
      <Contact />
      <Statistics />
    </div>
  );
};

export default Home;
