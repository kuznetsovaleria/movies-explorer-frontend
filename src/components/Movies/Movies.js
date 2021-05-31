import React from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import More from "../More/More.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Movies.css";

function Movies() {
  return (
    <>
      <Header />
      <section className="movies">
        <div className="movies__search">
          <SearchForm />
          <FilterCheckbox />
        </div>
        <MoviesCardList />
        <More />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
