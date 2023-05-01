import React from "react";
import style from "./idea.module.css";
const Ideas = () => {
  return (
    <div className={`${style.mainContainer}`}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              className={`mb-0 ${style.maged}`}
            >
              Maged
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className={`mb-0 ${style.elshafey}`}
            >
              Elshafey
            </p>
            <p data-aos="fade-down" data-aos-delay="600" className={style.idea}>
              Has A lot of Ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
/*
     
*/
