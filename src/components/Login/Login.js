import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="welcome welcome_login">
      {/* <img className="welcome__logo" src={logo} alt="Логотип" /> */}
      <form className="welcome__form" autoComplete="off" noValidate>
        <img className="welcome__logo" src={logo} alt="Логотип" />
        <h3 className="welcome__title">Рады видеть!</h3>
        <p className="welcome__subtitle">E-mail</p>
        <input
          id="login-email"
          name="email"
          type="email"
          className="welcome__input"
          required
        ></input>
        <span id="login-email-error" className="welcome__error"></span>
        <p className="welcome__subtitle">Пароль</p>
        <input
          id="login-password"
          name="password"
          type="password"
          className="welcome__input"
          minLength="6"
          maxLength="20"
          required
        ></input>
        <span id="login-password-error" className="welcome__error">
          Что-то пошло не так...
        </span>
        <button className="welcome__button welcome__button_login" type="submit">
          Войти
        </button>
      </form>
      <div className="welcome__signin">
        <p>Еще не зарегистрированы?</p>
        <Link to="/signup" className="welcome__link-to-signin">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
