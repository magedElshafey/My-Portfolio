import React, { useState } from "react";
import style from "./Nav.module.css";
import { navLinks } from "../../../fakers/data.js";
import logo from "../../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Social from "../../Utiltes/Social/Social";
const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const handleNavLinkClick = (link) => {
    setActiveLink(link.title);
  };
  return (
    <div className={`${style.mainContainer} py-3`}>
      <div className="container">
        <div
          className={`d-flex justify-content-between align-items-center ${style.navContainer}`}
        >
          <img className={style.logo} alt="logo/img" src={logo} />
          <ul
            className={`d-none d-md-flex align-items-center gap-4 ${style.mobileLinks}`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <HashLink
                  to={`/${link.path}`}
                  onClick={() => handleNavLinkClick(link)}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="navLinks"
                >
                  {link.title}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="d-block d-md-none">
            <AiOutlineMenu
              size={30}
              className={style.menuIcon}
              onClick={() => setShowSideBar(true)}
            />
            <div
              className={`${style.sideBar} ${
                showSideBar ? style.show : style.hide
              }`}
            >
              <div className="position-relative mb-5 pb-5">
                <AiOutlineClose
                  size={25}
                  onClick={() => setShowSideBar(false)}
                  className={style.closeIcon}
                />
              </div>
              <ul className="py-5">
                {navLinks.map((link, index) => (
                  <li
                    className="mb-5 sideBarMenuu"
                    key={index}
                    onClick={() => setShowSideBar(false)}
                  >
                    <HashLink href={`/${link.path}`} className="sideBarLinks">
                      {link.title}
                    </HashLink>
                  </li>
                ))}
              </ul>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
/*
	<div className={`pt-3 ${style.navContainer} ${shadow ? style.setShadow : style.removeShadow}`}>
			<div className='container'>
				<div className='py-3 d-flex justify-content-between align-items-center'>
				

					

				
					
					
				</div>
			</div>
		</div>
*/
