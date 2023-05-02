import React, { useRef, useEffect, useState } from "react";
import style from "./hero.module.css";
import megz from "../../../assets/megz (1).jpeg";
import Typed from "typed.js";
import IntroTitle from "../../Utiltes/introTitle/IntroTitle";
import Icons from "../../Utiltes/icons/Icons";
import { megzImg } from "../../../fakers/data.js";
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
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgData, setImgData] = useState(megzImg);
  return (
		<div className={`${style.mainContainer} mt mb-5 py-5`}>
			<div className='d-flex justify-content-between align-items-center flex-column flex-md-row gap-5'>
				<div className='d-flex  align-items-center flex-column gap-4'>
					<img data-aos='zoom-in-right' data-aos-delay='500' className={style.megz} alt='megz/img' src={imgData[selectedImg]} />
					<div className='d-flex align-items-center gap-3 flex-wrap'>
						{imgData.map((item, index) => (
							<img key={index} className={style.subImg} alt='megz/images' src={item} onClick={() => setSelectedImg(index)} />
						))}
					</div>
				</div>
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<IntroTitle />
					<h1 data-aos='fade-down' data-aos-delay='500' className='text-white'>
						Hello I'm{' '}
						<p data-aos='fade-up' data-aos-delay='600' className={`${style.maged} fw-bolder fs-2`}>
							Maged Elshafey
						</p>
					</h1>
					<h2 data-aos='fade-down' data-aos-delay='700' className='text-white' ref={el}></h2>
					<Icons />
					<button className='mainBtn mt-5'>Download my CV</button>
				</div>
			</div>
		</div>
  );
};

export default Hero;
/*
    <div className="">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-5 align-items-center">
          <div className=" d-flex  align-items-center flex-column gap-4">
            <img
              data-aos="zoom-in-right"
              data-aos-delay="500"
              className={style.megz}
              alt="megz/img"
              src={imgData[selectedImg]}
            />
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {imgData.map((item, index) => (
                <img
                  key={index}
                  className={style.subImg}
                  alt="megz/images"
                  src={item}
                  onClick={() => setSelectedImg(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-center">
            <IntroTitle />
            <h1
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-white"
            >
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
*/
