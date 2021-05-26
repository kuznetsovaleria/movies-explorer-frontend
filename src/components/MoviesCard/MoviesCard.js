import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import cardImage from "../../images/card-image.svg";
import saveMovieIcon from "../../images/save-movie.svg";
import savedMovieIcon from "../../images/saved-movie.svg";
import deleteMovieIcon from "../../images/delete-btn.svg";

function MoviesCard() {
  const { pathname } = useLocation();

  const isSaved = true; //для проверки вёрстки поменять на false
  // const isSaved = false;

  const movieIcon = isSaved ? saveMovieIcon : savedMovieIcon;
  const cardIcon = pathname === "/movies" ? movieIcon : deleteMovieIcon;

  return (
    <article className="card">
      <div className="card__group">
        <div className="card__text">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button className="card__button">
          <img src={cardIcon} alt="Сохранить/Удалить" />
        </button>
      </div>
      <img src={cardImage} alt="Стопкадр" className="card__image" />
    </article>
  );
}

export default MoviesCard;
