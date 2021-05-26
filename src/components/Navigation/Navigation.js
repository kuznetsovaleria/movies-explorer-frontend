import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../../images/user-icon.svg";

function Navigation({ isOpen, onClose }) {
  return (
    <section className="navigation">
      <div
        className={`${
          isOpen
            ? "navigation__popup navigation__popup_opened"
            : "navigation__popup"
        }`}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="close"
          className="navigation__close-button"
        />

        <nav className="navigation__menu">
          <div className="navigation__movies-container">
            <NavLink
              exact
              to="/"
              activeClassName="navigation__link_active"
              className="navigation__link navigation__link_to-main"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              activeClassName="navigation__link_active"
              className="navigation__link"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              activeClassName="navigation__link_active"
              className="navigation__link"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to="/profile" className="navigation__profile">
            <p className="navigation__link navigation__link_to-profile">
              Аккаунт
            </p>
            <img
              src={userIcon}
              alt="Профиль"
              className="navigation__user-icon"
            />
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
