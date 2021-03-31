import React, {useState, useEffect} from "react";
import Table from "../Table";
import Nav from "../SearchBar";
import API from "../../utils/API";
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
  
      const compare = (a, b) => {
        if (tableState.order === "ascend") {
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          } else if (heading === "name") {
            return a[heading].first.localeCompare(b[heading].first);
          } else {
            return b[heading] - a[heading];
          } 
        } else {
      if (a[heading] === undefined){
          return 1;
      } else if (b[heading] === undefined){
          return -1;
      } else if (heading ==="name"){
          return b[heading].first.localeCompare(a[heading].first);
      } else {
return b[heading]-  a[heading];
      }
  }}

   const sortedUsers = tableState.filteredUsers.sort(compare);
   setTableState({...tableState, filteredUsers: sortedUsers});
    }

  useEffect(() => {
      API.getUsers().then(res => {
      console.log(res)
        setTableState({
          ...tableState,
          users: res.data.results,
          filteredUsers: res.data.results
        });
      console.log(tableState.filteredUsers);
      });
    }, []);

    function handleNameChange(event) {
    const filter = event.target.value;
    const filteredList = tableState.users.filter(item => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setTableState({
      ...tableState,
      filteredUsers: filteredList
    });
  }

  function handleLocationChange(event) {
    const filter = event.target.value;
    const filteredList = tableState.users.filter(item => {
      let values = item.location.state.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setTableState({
      ...tableState,
      filteredUsers: filteredList
    });
  }

      return (
        <DataAreaContext.Provider
          value={{ tableState, handleSort, handleNameChange, handleLocationChange }}
        >
          <Nav />
          <Table/>
        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;