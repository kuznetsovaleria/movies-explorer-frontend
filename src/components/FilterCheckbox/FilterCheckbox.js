import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isShortMovie, handleShowShortMovie }) {
  return (
    <div className="filter-checkbox">
      <input
        checked={isShortMovie}
        onChange={handleShowShortMovie}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="filter-checkbox__button"
      />
      <label htmlFor="checkbox" className="filter-checkbox__text">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
