import React from "react";
import {Link} from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {  
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link 
        to="/"
        className="button not-found__button"
      >
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
