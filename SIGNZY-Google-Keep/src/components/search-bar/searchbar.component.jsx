import React from "react";

import "./searchbar.style.scss";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input id="search" type="text" placeholder="search for your notes" />
      <label htmlFor="search">
        <span className="material-icons">search</span>
      </label>
      <button className="reset-search">
        <span className="material-icons">clear</span>
      </button>
    </div>
  );
};

export default Searchbar;
