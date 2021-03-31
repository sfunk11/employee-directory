import React from "react";
import NameSearch from "../NameSearch";
import LocationSearch from "../LocationSearch";
import "./SearchBar.css";

function SearchBar() {

  

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="search-area col-4">
          <NameSearch />
        </div>
        <div className="search-area col-6">
          <LocationSearch />
      </div>
      </nav>
  

    // <div className="input-group mb-3 float-center">
    //             <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee by Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
    //             <button className="btn btn-outline-danger" onClick={clearSearch}><i class="fas fa-window-close"></i></button>
    //             <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
    //         </div>

  );
}
export default SearchBar;