import React from "react";
import "./SavedMovies.css";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies() {
  return (
    <section className="saved-movies movies">
      <div className="saved-movies__search movies__search">
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;