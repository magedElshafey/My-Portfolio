import React from "react";
import style from "./contact.module.css";
import MainTitle from "../../Utiltes/mainTitle/MainTitle";
import contact from "../../../assets/contact.avif";
import Social from "../../Utiltes/Social/Social";
const Contact = () => {
  return (
    <div id="contact" className="container my-5 py-5">
      <MainTitle title="contact" question="get in touch" />
      <div className="row my-5 py-5 justify-content-center">
        <div
          data-aos="fade-down"
          data-aos-delay="400"
          className={`p-4 col-10 mx-auto ${style.contactContainer}`}
        >
          <div className={`mx-auto mb-4 ${style.imgContainer}`}>
            <img
              data-aos="zoom-in"
              data-aos-delay="600"
              alt="contact/img"
              src={contact}
              className={style.mainImg}
            />
          </div>
          <p className={`fs-2 fw-bolder ${style.megz} mb-4`}>Maged Elshafey</p>
          <p className="mb-3 text-white-50">Front-End Developer</p>
          <p className="mb-5 text-white-50">
            I Am Available For Freelance Or Full Time and part time Positions.
            Contact Me And Let's Talk
          </p>
          <p className="mb-5 text-white-50">Contact With Me</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Contact;
