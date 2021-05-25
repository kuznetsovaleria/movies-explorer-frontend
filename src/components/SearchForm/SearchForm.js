import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon-white.svg";
import findIcon from "../../images/find-button-green.svg";

function SearchForm() {
  return (
    <form className="search__form">
      <img src={searchIcon} alt="Поиск" className="search__icon" />
      <input
        className="search__input"
        type="text"
        name="movie"
        id="movie"
        placeholder="Фильм"
        required
      />
      <button className="search__button" type="submit">
        <img src={findIcon} alt="Найти" />
      </button>
    </form>
  );
}

export default SearchForm;
