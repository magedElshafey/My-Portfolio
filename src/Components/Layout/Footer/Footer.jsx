import React from "react";
import style from "./footer.module.css";
import Social from "../../Utiltes/Social/Social";
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className="d-flex flex-column align-items-center ">
        <p className="text-white">
          All copyrights reserved to &copy;{" "}
          <span className={`fw-bolder fs-5 ${style.megz}`}>Maged Elshafey</span>
        </p>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
/*
   <div
      className={`${style.footerContainer} d-flex justify-content-start justify-content-md-center flex-column gap-5`}
    >
      <p className="text-white">
        All copyrights reserved to &copy;{" "}
        <p className={`fw-bolder fs-5 ${style.megz}`}>Maged Elshafey</p>
      </p>
      <Social />
    </div>
*/
