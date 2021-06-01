import React from "react";
import "./SavedMovies.css";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({ loggedIn }) {
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <section className="saved-movies movies">
      <div className="saved-movies__search movies__search">
        <SearchForm />
        <FilterCheckbox />
      </div>
      <MoviesCardList />
    </section>
    <Footer />
    </>
  );
}

export default SavedMovies;