import React from "react";
import style from "./icons.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
const Icons = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="d-flex align-items-center gap-2 "
    >
      <div className={style.box}>
        <a
          className={style.icon}
          target="_blank"
          href="https://www.linkedin.com/in/maged-elshafey"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
      <div className={style.box}>
        <a
          className={style.icon}
          target="_blank"
          href="https://github.com/magedElshafey"
        >
          <AiFillGithub size={20} />
        </a>
      </div>
      <div className={style.box}>
        <a
          className={style.icon}
          target="_blank"
          href="https://wa.me/+01022153359"
        >
          <BsPersonCheckFill size={20} />
        </a>
      </div>
      <div className={style.box}>
        <a
          className={style.icon}
          target="_blank"
          href="mailto:magedelshafey98@gmail.com"
        >
          <AiOutlineMail size={20} />
        </a>
      </div>
    </div>
  );
};

export default Icons;
