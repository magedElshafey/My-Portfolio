import React, { useEffect, useState } from "react";

import ProgressBar from "react-scroll-progress-bar";
import { skills } from "../../../fakers/data";
const SkillsDetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.pageYOffset /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="skills" className="my-5 py-5 container">
      {skills.map((item, index) => (
        <div key={index}>
          <h4 className="text-white">{item.name}</h4>
          <ProgressBar
            height="6"
            bgcolor="#fafa"
            duration="0.2"
            position={scrollPosition}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsDetails;
