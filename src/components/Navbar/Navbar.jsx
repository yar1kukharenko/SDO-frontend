import React from "react";
import icon_dog from "../../static/img/free-icon-dog-house-2500545 1.svg";
import icon from "../../static/img/free-icon-user-80783911.svg";
import logo from "../../static/img/mospolytech-logo-black.svg";
import NavbarCSS from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={NavbarCSS.header}>
      <div className={NavbarCSS.container}>
        <div className={NavbarCSS.box}>
          <img src={logo} alt="logo" className={NavbarCSS.logo} />
          <div className={NavbarCSS.usersButtons}>
            <ul className={NavbarCSS.menu}>
              <li>
                <a href="/">
                  <img src={icon_dog} alt="home" className={NavbarCSS.home} />
                </a>
              </li>
              <div className={NavbarCSS.user}>
                <li>
                  <img className={NavbarCSS.icon} src={icon} alt="" />
                </li>
                <div className={NavbarCSS.name_surname}>
                  <li>
                    <p className={NavbarCSS.name}>Имя Фамилия</p>
                  </li>
                  <li>
                    <p className={NavbarCSS.number}>№ группы</p>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
