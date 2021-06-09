import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useForm.js";

function Login({ onLogin }) {
  const { values, errors, isValid, handleInputChange, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  // ОБРАБОТКА САБМИТА
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values);
  }

  const buttonClassName = `${
    isValid ? "welcome__button" : "welcome__button_disabled"
  }`;

  return (
    <section className="welcome welcome_login">
      <form
        className="welcome__form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <img className="welcome__logo" src={logo} alt="Логотип" />
        <h3 className="welcome__title">Рады видеть!</h3>
        <p className="welcome__subtitle">E-mail</p>
        <input
          id="login-email"
          name="email"
          type="email"
          className="welcome__input"
          value={values.email || ""}
          onChange={handleInputChange}
          required
        ></input>
        <span id="login-email-error" className="welcome__error">
          {errors.email}
        </span>
        <p className="welcome__subtitle">Пароль</p>
        <input
          id="login-password"
          name="password"
          type="password"
          className="welcome__input"
          value={values.password || ""}
          onChange={handleInputChange}
          minLength="8"
          maxLength="20"
          required
        ></input>
        <span id="login-password-error" className="welcome__error">
          {errors.password}
        </span>
        <button className={buttonClassName} type="submit">
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
