import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="nav-tab">
      <nav className="nav-tab__menu">
        <a className="nav-tab__link" href="#about-project">
          О проекте
        </a>
        <a className="nav-tab__link" href="#techs">
          Технологии
        </a>
        <a className="nav-tab__link" href="#student">
          Студентка
        </a>
      </nav>
    </div>
  );
}

export default NavTab;
