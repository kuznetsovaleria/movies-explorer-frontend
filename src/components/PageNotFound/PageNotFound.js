import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link
        onClick={() => history.goBack()}
        className="button not-found__button"
      >
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
