import React, {useState, useEffect} from "react";
import Table from "../Table";
import Nav from "../SearchBar";
// import API from "../../utils/API";
import "./DataArea.css";
import DataAreaContext from "../../utils/DataAreaContext"

const DataArea = () => {

      const [tableState, setTableState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "Location", width: "20%", }
        ]
      });
    
    const handleSort = heading => {
      if (tableState.order === "descend") {
          setTableState({
              order:"ascend"
          })
      } else{
          setTableState({
              order:"descend"
          })
      }
    }

      return (
        <DataAreaContext.Provider
          value={{ tableState, handleNameChange, handleLocationChange, handleSort }}
        >
          <Nav />
          <Table/>
        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;