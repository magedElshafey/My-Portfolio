import React from "react";
import style from "./mainTitle.module.css";
const MainTitle = ({ title, question }) => {
  return (
    <div className="text-center ">
      <h3
        data-aos="fade-down"
        data-aos-delay="300"
        className={`mb-4 ${style.title}`}
      >
        {title}
      </h3>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className={`${style.question} text-white fw-bolder fs-3`}
      >
        {question}
      </p>
    </div>
  );
};

export default MainTitle;
