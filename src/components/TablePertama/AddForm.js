import React, { useMemo, useState } from "react";
import { nanoid } from 'nanoid';
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { Checkbox } from "./Checkbox";

export const AddForm = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [personDatas, setPersonDatas] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nama: '',
    kelas: '',
    ipk: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldname] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newPersonData = {
        id: nanoid(),
        nama: addFormData.nama,
        kelas: addFormData.kelas,
        ipk: addFormData.ipk,
    }
    const newPersonDatas = [...personDatas, newPersonData];
    setPersonDatas(newPersonDatas);
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleAllRowsSelectedProps} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                  </span>
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
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Tambah Data Baru</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="nama"
          required="required"
          placeholder="Masukan Nama..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="kelas"
          required="required"
          placeholder="Masukan Kelas..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ipk"
          required="required"
          placeholder="Masukan IPK..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Tambah</button>
      </form>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};
