import React from "react";
import "./AboutMe.css";
import myPhoto from "../../images/me.jpeg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h3 className="about-me__title">Студентка</h3>
      <div className="about-me__columns">
        <div className="about-me__column">
          <h2 className="about-me__name">Валерия</h2>
          <p className="about-me__description">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__text">
            В разное время я жила в Подмосковье, в Москве, в Барселоне. Окончила
            РУДН по специальностям "международные отношения" и "переводчик с
            испанского языка". В Москве я работала продюсером рекламных
            видеороликов, а в Испании меня привлекла сфера программирования, я решила сменить
            сферу деятельности и учиться фронтенду. Сейчас я снова живу в Москве
            и продолжаю изучать веб-разработку.
          </p>
          <ul className="about-me__links">
            <li>
              <a
                href="https://t.me/kuznetsovaleria"
                target="_blank"
                rel="noreferrer"
                className="about-me__link"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kuznetsovaleria"
                target="_blank"
                rel="noreferrer"
                className="about-me__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__column">
          <img src={myPhoto} alt="Фото студентки" className="about-me__photo" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
