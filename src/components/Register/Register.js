import React from "react";
import { Link } from "react-router-dom";
// import "./Register.css";
import logo from "../../images/logo.svg";
import "../styles/Welcome.css";

function Register() {
  return (
    <section className="welcome welcome_register">
      {/* <img className="welcome__logo" src={logo} alt="Логотип" /> */}
      <form className="welcome__form" autoComplete="off" noValidate>
        <img className="welcome__logo" src={logo} alt="Логотип" />
        <h3 className="welcome__title">Добро пожаловать!</h3>
        <p className="welcome__subtitle">Имя</p>
        <input
          id="register-name"
          name="name"
          type="text"
          className="welcome__input"
          required
        ></input>
        <span id="register-name-error" className="welcome__error"></span>
        <p className="welcome__subtitle">E-mail</p>
        <input
          id="register-email"
          name="email"
          type="email"
          className="welcome__input"
          required
        ></input>
        <span id="register-email-error" className="welcome__error"></span>
        <p className="welcome__subtitle">Пароль</p>
        <input
          id="register-password"
          name="password"
          type="password"
          className="welcome__input"
          minLength="6"
          maxLength="20"
          required
        ></input>
        <span id="register-password-error" className="welcome__error">
          Что-то пошло не так...
        </span>
        <button
          className="welcome__button welcome__button_register"
          typ="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="welcome__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/signin" className="welcome__link-to-signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
