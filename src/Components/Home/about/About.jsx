import React from "react";
import style from "./about.module.css";
import MainTitle from "../../Utiltes/mainTitle/MainTitle";
import about from "../../../assets/about.jpg";
const About = () => {
  return (
    <div className={`mt ${style.mainContainer}`}>
      <div id="about" className="container">
        <MainTitle title="About" question="who I Am ? " />
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className={`text-white lh  ${style.desc} w-100`}
            >
              I'm a front-end developer with 6 months of experience, I am
              passionate about creating clean and user-friendly interfaces that
              improve the overall user experience. I have a strong understanding
              of HTML, CSS, and JavaScript, and have experience working with
              modern front-end frameworks such as React and Vue.js. I am
              constantly seeking to improve my skills and stay up-to-date with
              the latest trends and technologies in front-end development. In
              addition to my technical skills, I am a strong communicator and a
              team player. I enjoy collaborating with designers and back-end
              developers to create seamless and responsive applications. I am
              dedicated to delivering high-quality work and am always looking
              for ways to optimize and improve my code. Overall, I am a
              motivated and enthusiastic front-end developer who is eager to
              continue learning and growing in the field.
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg?w=740&t=st=1683115929~exp=1683116529~hmac=a9375eaa69474b363599f9b8d4446afc43871551ef2733e67973117c76a02d9c"
              alt="about/img"
              data-aos="zoom-in"
              data-aos-delay="500"
              className={`${style.aboutImg} img-fluid`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
