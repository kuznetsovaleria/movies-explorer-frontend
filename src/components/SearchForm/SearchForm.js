import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon-white.svg";
import findIcon from "../../images/find-button-green.svg";

function SearchForm({
  searchMovie,
  searchSavedMovie,
  isMoviesSaved,
  turnPreloaderOn,
  showFailedSearchMessage,
  showSearchAmongSavedMovies,
}) {
  const [movieName, setMovieName] = React.useState("");
  const [savedMovieName, setSavedMovieName] = React.useState("");
  const [errors, setErrors] = React.useState({});

  function handleChangeMovieInput(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setMovieName(value);
    setErrors({ ...errors, [name]: target.validationMessage });
  }

  function handleChangeSavedMovieInput(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setSavedMovieName(value);
    setErrors({ ...errors, [name]: target.validationMessage });
  }

  function handleMovieFormSubmit(evt) {
    evt.preventDefault();
    turnPreloaderOn();
    searchMovie(movieName);
    showFailedSearchMessage();
  }

  function handleSavedMovieFormSubmit(evt) {
    evt.preventDefault();
    searchSavedMovie(savedMovieName);
    showSearchAmongSavedMovies();
  }

  return (
    <>
      {isMoviesSaved ? (
        <form
          className="search__form"
          onSubmit={handleSavedMovieFormSubmit}
          autoComplete="off"
        >
          <img src={searchIcon} alt="Поиск" className="search__icon" />
          <input
            className="search__input"
            type="text"
            name="movie"
            id="movie"
            placeholder="Фильм"
            onChange={handleChangeSavedMovieInput}
            required
          />
          <button className="search__button" type="submit">
            <img src={findIcon} alt="Найти" />
          </button>
        </form>
      ) : (
        <form
          className="search__form"
          onSubmit={handleMovieFormSubmit}
          autoComplete="off"
        >
          <img src={searchIcon} alt="Поиск" className="search__icon" />
          <input
            className="search__input"
            type="text"
            name="movie"
            id="movie"
            placeholder="Фильм"
            onChange={handleChangeMovieInput}
            required
          />
          <button className="search__button" type="submit">
            <img src={findIcon} alt="Найти" />
          </button>
        </form>
      )}
    </>
  );
}

export default SearchForm;
