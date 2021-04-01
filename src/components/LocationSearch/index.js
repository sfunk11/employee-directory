import React, { useContext } from "react";
import "./LocationSearch.css";
import DataAreaContext from "../../utils/DataAreaContext";

const LocationSearch = () => {
    const { handleLocationChange} = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter State"
                    aria-label="Search"
                    onChange={e => handleLocationChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search Location
                 </button>
            </form>
        </div>
    );
}
export default LocationSearch;