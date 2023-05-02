import React from "react";
import style from "./project.module.css";
import { projects } from "../../../fakers/data";
import MainTitle from "../../Utiltes/mainTitle/MainTitle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div id="projects" className={`${style.mainContainer}`}>
      <div className="container">
        <MainTitle title="projects" question="what I have built ? " />
        <div className="row justify-content-center gap-5 mt-5 pt-5">
          {projects.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className={`col-12 p-0 col-md-6 col-lg-4 mb-0 mb-md-3 ${style.projectContainer}`}
            >
              <img
                data-aos="zoom-in-right"
                data-aos-delay={item.delay}
                key={index}
                alt="project/img"
                src={item.img}
                className={` ${style.mainImg}`}
              />
              <div className="p-4">
                <Link className="link mb-5" to={`${item.id}`}>
                  <h3 className={` text-white text-center ${style.name}`}>
                    {item.name}
                  </h3>
                </Link>
                <p className="lh text-white-50 mb-5">
                  {item.desc.substring(0, 100) + "...."}
                </p>
                <button
                  onClick={() => navigate(`/${item.id}`)}
                  className="mainBtn d-flex justify-content-center"
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
/*
  <div className="row justify-content-center my-5 pt-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`${style.mainContainer} col-12 col-md-6   mb-4 `}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <img
              data-aos="zoom-in-right"
              data-aos-delay={item.delay}
              alt="project/img"
              src={item.img}
              className={style.mainImg}
            />
          </div>
        ))}
      </div>
*/
