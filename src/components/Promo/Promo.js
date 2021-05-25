import React from "react";
import logo from "../../images/logo.svg";
import landingLogo from "../../images/landing-logo.svg";
import { Link } from "react-router-dom";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__header">
        <img src={logo} alt="Логотип" className="promo__logo" />
        <nav className="promo__nav">
          <Link to="/signup" className="promo__link">
            Регистрация
          </Link>
          <Link to="/signin" className="promo__link promo__link_login">
            Войти
          </Link>
        </nav>
      </div>
      <div className="promo__main">
        <img src={landingLogo} alt="Логотип" className="promo__landing-logo" />
        <h1 className="promo__title">
          Учебный проект студентки факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
