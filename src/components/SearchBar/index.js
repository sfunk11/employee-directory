import React from "react";
import NameSearch from "../NameSearch";
import LocationSearch from "../LocationSearch";
import "./SearchBar.css";

function SearchBar() {

  

  return (
<nav className="navbar navbar-expand-lg navbar-light float-center bg-light">
        <div className="search-area float-left col-6">
          <NameSearch />
        </div>
        <div className="search-area justify-right col-6">
          <LocationSearch />
      </div>
      </nav>
  

    

  );
}
export default SearchBar;