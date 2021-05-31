import React from "react";
import Header from "../Header/Header.js";
import "./Profile.css";

function Profile({ name, email, onSignOut }) {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Валерия!</h2>
        <form className="profile__form">
          <div className="profile__form-row">
            <p className="profile__subtitle">Имя</p>
            <input
              value={name}
              className="profile__input"
              type="text"
              name="name"
              id="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
          </div>
          <div className="profile__form-row">
            <p className="profile__subtitle">E-mail</p>
            <input
              value={email}
              className="profile__input"
              type="text"
              name="email"
              id="email"
              minLength="2"
              maxLength="40"
              placeholder="E-mail"
              required
            />
          </div>
          <button className="profile__button">Редактировать</button>
          <button className="profile__button profile__button_signout"
          onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
