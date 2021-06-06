import React from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Movies.css";

function Movies({
  loggedIn,
  cards,
  handleSaveMovie,
  handleDeleteMovie,
  isLoading,
  windowWidth,
  savedMovies,
  isShortMovie,
  handleShowShortMovie,
  onChange,
  onSubmit,
  searchMessage,
  showFailedSearchMessage,
  turnPreloaderOn,
  searchMovie,
  searchSavedMovie,
}) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="movies">
        <div className="movies__search">
          <SearchForm
            onChange={onChange}
            onSubmit={onSubmit}
            showFailedSearchMessage={showFailedSearchMessage}
            searchMovie={searchMovie}
            turnPreloaderOn={turnPreloaderOn}
            searchSavedMovie={searchSavedMovie}
          />
          <FilterCheckbox
            isShortMovie={isShortMovie}
            handleShowShortMovie={handleShowShortMovie}
          />
        </div>
        <MoviesCardList
          cards={cards}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          isLoading={isLoading}
          windowWidth={windowWidth}
          savedMovies={savedMovies}
          searchMessage={searchMessage}
        />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
