import React, {useState, useEffect} from "react";
// import Table from "../Table";
import Nav from "../SearchBar";
// import API from "../../utils/API";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext"

const DataArea = () => {
    
      return (
        <DataAreaContext.Provider
          value={{ }}
        >
          <Nav />

        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;