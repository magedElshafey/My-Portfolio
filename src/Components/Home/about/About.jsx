import React from "react";
import style from "./about.module.css";
import MainTitle from "../../Utiltes/mainTitle/MainTitle";
import about from "../../../assets/about.jpg";
const About = () => {
  return (
    <div id="about" className="container my-5 py-5">
      <MainTitle title="About" question="who I Am ? " />
      <div className="row my-5 justify-content-center align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p
            data-aos="fade-down"
            data-aos-delay="500"
            className={`text-white lh  ${style.desc}`}
          >
            I Specialize In Building Mobile Responsive Front-End UI Applications
            That Connect With API’s And Other Backend Technologies. I’m
            Passionate About Learning New Technologies And Understand There Is
            More Than One Way To Accomplish A Task. Though I Am Most Proficient
            In Building Front-End Applications Using HTML, CSS, Javascript, And
            React, I Am A Quick Learner And Can Pick Up New Tech Stacks As
            Needed. I Believe That Being A Great Developer Is Not Using One
            Specific Language, But Choosing The Best Tool For The Job
          </p>
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={about}
            alt="about/img"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            className={style.aboutImg}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
