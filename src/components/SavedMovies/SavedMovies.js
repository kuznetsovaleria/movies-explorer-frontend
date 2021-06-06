import React from "react";
import "./SavedMovies.css";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({
  loggedIn,
  onSubmit,
  onChange,
  isMoviesSaved,
  isSearchingAmongSavedMovies,
  showSearchAmongSavedMovies,
  windowWidth,
  searchSavedMovie,
  cards,
  savedMovies,
  foundSavedCards,
  handleDeleteMovie,
  isShortMovie,
  handleShowShortMovie,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="saved-movies movies">
        <div className="saved-movies__search movies__search">
          <SearchForm
            onChange={onChange}
            onSubmit={onSubmit}
            isMoviesSaved={isMoviesSaved}
            searchSavedMovie={searchSavedMovie}
            showSearchAmongSavedMovies={showSearchAmongSavedMovies}
          />
          <FilterCheckbox
            isShortMovie={isShortMovie}
            handleShowShortMovie={handleShowShortMovie}
          />
        </div>
        <MoviesCardList
          cards={cards}
          foundSavedCards={foundSavedCards}
          isMoviesSaved={isMoviesSaved}
          savedMovies={savedMovies}
          isSearchingAmongSavedMovies={isSearchingAmongSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
          windowWidth={windowWidth}
        />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
