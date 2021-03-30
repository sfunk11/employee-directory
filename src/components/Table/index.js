import React, { useContext } from "react";
import TableBody from "../TableBody";
import "./Table.css";
import DataAreaContext from "../../utils/DataAreaContext";

const Table = () => {
    const { tableState, handleSort } = useContext(DataAreaContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {tableState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <TableBody />
            </table>
        </div>
    );
}

export default Table;