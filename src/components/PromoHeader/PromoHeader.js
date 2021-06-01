import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./PromoHeader.css";

function PromoHeader() {
  return (
    <header className="promo-header">
      <div className="promo-header__container">
        <img src={logo} alt="Логотип" className="promo-header__logo" />
        <nav className="promo-header__nav">
          <Link to="/signup" className="promo-header__link">
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="promo-header__link promo-header__link_login"
          >
            Войти
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default PromoHeader;
