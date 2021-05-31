import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../styles/Welcome.css";
import { useFormWithValidation } from "../../hooks/useForm.js";

function Register({ onRegister }) {
  const { values, errors, isValid, handleInputChange, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  // ОБРАБОТКА САБМИТА
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.name || !values.email || !values.password) {
      return;
    }
    onRegister(values);
  }

  const buttonClassName = `${
    isValid ? "welcome__button" : "welcome__button_disabled"
  }`;

  return (
    <section className="welcome welcome_register">
      <form
        onSubmit={handleSubmit}
        className="welcome__form"
        autoComplete="off"
        noValidate
      >
        <img className="welcome__logo" src={logo} alt="Логотип" />
        <h3 className="welcome__title">Добро пожаловать!</h3>
        <p className="welcome__subtitle">Имя</p>
        <input
          id="register-name"
          name="name"
          type="text"
          className="welcome__input"
          value={values.name || ""}
          onChange={handleInputChange}
          minLength="2"
          maxLength="30"
          required
        ></input>
        <span id="register-name-error" className="welcome__error">
          {errors.name || ""}
        </span>
        <p className="welcome__subtitle">E-mail</p>
        <input
          id="register-email"
          name="email"
          type="email"
          className="welcome__input"
          value={values.email || ""}
          onChange={handleInputChange}
          required
        ></input>
        <span id="register-email-error" className="welcome__error">
          {errors.email || ""}
        </span>
        <p className="welcome__subtitle">Пароль</p>
        <input
          id="register-password"
          name="password"
          type="password"
          className="welcome__input"
          minLength="8"
          maxLength="20"
          value={values.password || ""}
          onChange={handleInputChange}
          required
        ></input>
        <span id="register-password-error" className="welcome__error">
          {errors.password}
        </span>
        <button type="submit" className={buttonClassName}>
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
