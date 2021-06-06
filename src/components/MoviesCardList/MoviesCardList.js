import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import "./MoviesCardList.css";
import {
  WINDOW_MAX_WIDTH,
  WINDOW_MEDIUM_WIDTH,
  WINDOW_MIN_WIDTH,
  INITIAL_CARDS_MAX_QTY,
  INITIAL_CARDS_MEDIUM_QTY,
  INITIAL_CARDS_MIN_QTY,
  MORE_CARDS_MAX_QTY,
  MORE_CARDS_MEDIUM_QTY,
  MORE_CARDS_MIN_QTY,
} from "../../utils/constants.js";
import { useWindowWidth } from "../../utils/utils.js";
import Preloader from "../Preloader/Preloader.js";

function MoviesCardList({
  cards,
  isLoading,
  searchMessage,
  handleSaveMovie,
  handleDeleteMovie,
  isMoviesSaved,
  foundSavedCards,
  isSearchingAmongSavedMovies,
  savedMovies,
}) {
  const [initialCards, setInitialCards] = React.useState(0);
  const [moreCards, setMoreCards] = React.useState(0);
  const windowWidth = useWindowWidth();

  function showMoreCards() {
    setInitialCards(initialCards + moreCards);
  }

  React.useEffect(() => {
    if (windowWidth >= WINDOW_MAX_WIDTH) {
      setInitialCards(INITIAL_CARDS_MAX_QTY);
      setMoreCards(MORE_CARDS_MAX_QTY);
    }
    if (windowWidth < WINDOW_MAX_WIDTH && windowWidth >= WINDOW_MEDIUM_WIDTH) {
      setInitialCards(INITIAL_CARDS_MAX_QTY);
      setMoreCards(MORE_CARDS_MAX_QTY);
    }
    if (windowWidth <= WINDOW_MEDIUM_WIDTH && windowWidth >= WINDOW_MIN_WIDTH) {
      setInitialCards(INITIAL_CARDS_MEDIUM_QTY);
      setMoreCards(MORE_CARDS_MEDIUM_QTY);
    }
    if (windowWidth <= WINDOW_MIN_WIDTH) {
      setInitialCards(INITIAL_CARDS_MIN_QTY);
      setMoreCards(MORE_CARDS_MIN_QTY);
    }
  }, [windowWidth]);

  return (
    <section className="cards">
      {isMoviesSaved ? (
        <>
          {isSearchingAmongSavedMovies ? (
            <>
              <div className="cards__grid">
                {foundSavedCards.map((card) => {
                  return (
                    <MoviesCard
                      key={card.id || card._id}
                      card={card}
                      handleDeleteMovie={handleDeleteMovie}
                      isMoviesSaved={isMoviesSaved}
                      savedMovies={savedMovies}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div className="cards__grid">
              {cards.map((card) => {
                return (
                  <MoviesCard
                    key={card.id || card._id}
                    card={card}
                    handleDeleteMovie={handleDeleteMovie}
                    isMoviesSaved={isMoviesSaved}
                    savedMovies={savedMovies}
                  />
                );
              })}
            </div>
          )}
        </>
      ) : (
        <>
          {isLoading && <Preloader />}
          {cards.length === 0 ? (
            <p
              className={
                searchMessage ? "cards__error" : "cards__error_invisible"
              }
            >
              Ничего не найдено
            </p>
          ) : (
            <div className="cards__grid">
              {cards.slice(0, initialCards).map((card) => {
                return (
                  <MoviesCard
                    key={card.id || card._id}
                    card={card}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                  />
                );
              })}
            </div>
          )}
          <button
            className={
              cards.length <= 12 || initialCards >= cards.length
                ? "cards__more_invisible"
                : "cards__more"
            }
            type="button"
            onClick={showMoreCards}
          >
            Ещё
          </button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
