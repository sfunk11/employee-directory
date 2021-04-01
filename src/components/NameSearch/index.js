import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const { handleNameChange } = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter First Name"
                    aria-label="Search"
                    onChange={e => handleNameChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search Name
                 </button>
            </form>
        </div>
    );
}
export default SearchName;