import React from "react";
import "./Header.css";

function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>You can search by either Name or Location to filter the list.</p>
            <p>Or you can sort the list by clicking on the heading for the Name column.</p>
        </div>
    )
}

export default Header;


