import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="cards__grid">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  );
}

export default MoviesCardList;
