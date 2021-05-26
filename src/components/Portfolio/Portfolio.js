import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__item-name">Статичный сайт</p>
          <a
            href="https://github.com/kuznetsovaleria/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Указатель" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-name">Адаптивный сайт</p>
          <a
            href="https://kuznetsovaleria.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Указатель" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__item-name">Одностраничное приложение</p>
          <a
            href="https://kuznetsova.mesto.nomoredomains.icu/sign-in"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Указатель" className="portfolio__arrow" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
