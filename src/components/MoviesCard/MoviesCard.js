import React from "react";
import "./MoviesCard.css";
import { MOVIE_IMG_URL } from "../../utils/constants.js";
import noImage from "../../images/noimage.jpeg";

function MoviesCard({
  card,
  handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  isMoviesSaved,
}) {
  const [isMovieSaved, setIsMovieSaved] = React.useState(false);
  const buttonClassName = `${
    isMovieSaved ? "card__button_saved" : "card__button_to-save"
  }`;

  const setLikes = React.useCallback(() => {
    const isMovieLiked = savedMovies.find((movie) => movie.movieId === card.id);
    if (isMovieLiked) {
      setIsMovieSaved(true);
    } else {
      setIsMovieSaved(false);
    }
  }, [card.id, savedMovies]);

  React.useEffect(() => {
    setLikes();
  }, [setLikes]);

  function handleSaveClick() {
    if (!isMovieSaved) {
      handleSaveMovie({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image.url ? `${MOVIE_IMG_URL}${card.image.url}` : noImage,
        trailer: card.trailerLink,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: card.image.formats.thumbnail.url
          ? `${MOVIE_IMG_URL}${card.image.formats.thumbnail.url}`
          : noImage,
      });
      setIsMovieSaved(true);
    } else {
      const savedMovie = savedMovies.find((movie) => movie.movieId === card.id);
      handleDeleteMovie(savedMovie);
      setIsMovieSaved(false);
    }
  }

  function handleDeleteClick() {
    handleDeleteMovie(card);
  }

  function convertDuration(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <article className="card">
      {isMoviesSaved ? (
        <>
          <div className="card__group">
            <div className="card__text">
              <p className="card__name">{card.nameRU}</p>
              <p className="card__duration">{convertDuration(card.duration)}</p>
            </div>
            <button
              className="card__button_to-delete"
              type="button"
              onClick={handleDeleteClick}
            ></button>
          </div>
          <a href={card.trailer} target="_blank" rel="noreferrer">
            <img
              src={`${card.image !== null ? `${card.image}` : noImage}`}
              alt={card.nameRU}
              className="card__image"
            />
          </a>
        </>
      ) : (
        <>
          <div className="card__group">
            <div className="card__text">
              <p className="card__name">{card.nameRU}</p>
              <p className="card__duration">{convertDuration(card.duration)}</p>
            </div>
            <button
              className={buttonClassName}
              type="button"
              onClick={handleSaveClick}
            ></button>
          </div>
          <a href={card.trailerLink} target="_blank" rel="noreferrer">
            <img
              src={`${
                card.image !== null
                  ? `${MOVIE_IMG_URL}${card.image.url}`
                  : noImage
              }`}
              alt={card.nameRU}
              className="card__image"
            />
          </a>
        </>
      )}
    </article>
  );
}

export default MoviesCard;
