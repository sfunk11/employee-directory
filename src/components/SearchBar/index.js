import React from "react";
import NameSearch from "../NameSearch";
import LocationSearch from "../LocationSearch";
import "./searchbar.css";


function SearchBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-6">
          <LocationSearch />
        </div>
        <div className="search-area col-6">
          <NameSearch />
        </div>
      </div>
    </nav>
  );
}
export default SearchBar;