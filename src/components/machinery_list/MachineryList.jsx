import React from "react";
import './MachineryList.css';
import fakeData from "./MOCK_DATA.json";
import {useTable} from 'react-table';


function MachineryList() {
    const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Maker's Name",
        accessor: "makers_name",
      },
      {
        Header: "Country Of Origin",
        accessor: "country_of_origin",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Capacity",
        accessor: "capacity",
      },
      {
        Header: "Unit",
        accessor: "unit",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="machinery_list_section">
        <h2 className="machinery_list_title">Machinery's List</h2>
      <div className="machinery_list_container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MachineryList;