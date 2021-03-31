import React, { useContext } from "react";
import "./TableBody.css";
import DataAreaContext from "../../utils/DataAreaContext";

const TableBody = () => {
  const { tableState } = useContext(DataAreaContext);

  return (
    <tbody>
       {tableState.filteredUsers[0].map(({ login, name, picture, phone, email, location }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="Location" className="align-middle">
                {location.city}, {location.state}
              </td>
            </tr>
          );
        })
      }
    </tbody>
  );
}

export default TableBody;