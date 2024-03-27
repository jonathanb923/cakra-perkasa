import React from "react";
import { SmallNavbar } from "../../components/small_navbar/SmallNavbar";
import fakeData from "./MOCK_DATA.json";
import {useTable} from 'react-table';

export const Machinery = ({title}) => {
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
       <>
            <SmallNavbar title = {title}/>
            <section className='machinery_equipment_section'>
                <h2 className="machinery_equipment_title">Workshop Equiment</h2>
                <section className='about_container'>
                  <div className='about_content'>
                    <img className='about_image' src="blank.png" alt="" />
                    <div className='about_description'>
                      <h2 className='about_title'>Arc Spray</h2>
                      <ul>
                        <li>Sistem pengelasan dengan temperature suhu hanya 60° C.</li>
                        <li>Putaran benda kerja maksimum 5,000 rpm</li>
                        <li>Ketebalan lapisan maksimum 15 mm</li>
                        <li>Mechanical Bounding 10,000 psi</li>
                        <li>Kekerasan material lapisan mencapai 60 HRC</li>
                        <li>Tersedia dalam banyak pilihan material lapisan</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className='about_container'>
                  <div className='about_content'>
                    <div className='about_description'>
                      <h2 className='about_title'>High Velocity Oxygen Fuel (HVOF)</h2>
                      <ul>
                        <li>Sistem pengelasan dengan menggunakan kekuatan angin sebagai tumpuan</li>
                        <li>Putaran benda kerja lebih dari 5,000 rpm</li>
                        <li>Ketebalan lapisan maksimum 9 mm</li>
                        <li>Mechanical Bounding 15,000 psi</li>
                        <li>Kekerasan material lapisan mencapai 78 HRC</li>
                        <li>Tersedia dalam banyak pilihan material lapisan</li>
                      </ul>
                    </div>
                    <img className='about_image' src="blank.png" alt="" />
                  </div>
                </section>
                <section className='about_container'>
                  <div className='about_content'>
                    <img className='about_image' src="blank.png" alt="" />
                    <div className='about_description'>
                      <h2 className='about_title'>Balancing</h2>
                      <ul>
                        <li>Dapat mengerjakan benda kerja sampai dengan kapasitas berikut:Diameter : 1,5 cm Panjang : 3 M Berat : 3 Ton</li>
                        <li>Dua pilihan standard balancing : ISO or API</li>
                      </ul>
                    </div>
                    <img className='about_image' src="blank.png" alt="" />
                  </div>
                </section>
            </section>
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
       </>
    )
}