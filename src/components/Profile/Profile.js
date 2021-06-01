import React from "react";
import Header from "../Header/Header.js";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useFormWithValidation } from "../../hooks/useForm.js";

function Profile({ onSignOut, onUpdateUser, loggedIn }) {
  const {
    values,
    isValid,
    handleInputChange,
    setValues,
    setIsValid,
    resetForm,
  } = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  const buttonClassName = `${
    isValid ? "profile__button" : "profile__button profile__button_disabled"
  }`;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__form-row">
            <p className="profile__subtitle">Имя</p>
            <input
              value={values.name || ""}
              className="profile__input"
              type="text"
              name="name"
              id="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            {/* <span id="profile-name-error" className="welcome__error">
              {errors.name || ""}
            </span> */}
          </div>
          <div className="profile__form-row">
            <p className="profile__subtitle">E-mail</p>
            <input
              value={values.email || ""}
              className="profile__input"
              type="text"
              name="email"
              id="email"
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
              onChange={handleInputChange}
              required
              autoComplete="off"
            />
            {/* <span id="profile-email-error" className="welcome__error">
              {errors.name || ""}
            </span> */}
          </div>
          <button className={buttonClassName}>
            {isValid ? "Сохранить" : "Редактировать"}
          </button>
          <button
            className="profile__button profile__button_signout"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
