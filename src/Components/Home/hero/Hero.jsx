import React, { useRef, useEffect } from "react";
import style from "./hero.module.css";
import megz from "../../../assets/megz (1).jpeg";
import Typed from "typed.js";
import IntroTitle from "../../Utiltes/introTitle/IntroTitle";
import Icons from "../../Utiltes/icons/Icons";
const Hero = () => {
  const el = useRef();
  const options = {
    strings: ["a Front-end web Developer", "React JS Developer"], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 300,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
  };
  useEffect(() => {
    const typed = new Typed(el.current, options);

    // Destropying to clean up process
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={`pt-5 mt-5  ${style.mainContainer}`}>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
        <div>
          <img
            data-aos="zoom-in-right"
            data-aos-delay="500"
            className={style.megz}
            alt="megz/img"
            src={megz}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <IntroTitle />
          <h1 data-aos="fade-down" data-aos-delay="500" className="text-white">
            Hello I'm{" "}
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className={`${style.maged} fw-bolder fs-2`}
            >
              Maged Elshafey
            </p>
          </h1>
          <h2
            data-aos="fade-down"
            data-aos-delay="700"
            className="text-white"
            ref={el}
          ></h2>
          <Icons />
          <button className="mainBtn mt-5">Download my CV</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
