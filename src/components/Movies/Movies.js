import React from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import More from "../More/More.js";
import "./Movies.css";

function Movies() {
  return (
    <section className="movies">
      <div className="movies__search">
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList />
      <More />
    </section>
  );
}

export default Movies;
