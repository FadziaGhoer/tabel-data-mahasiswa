import React from "react";
import "../App.css";
import Modal from "./Modal";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.nama}</td>
      <td>{contact.kelas}</td>
      <td>{contact.ipk}</td>
      <td className="row-action">
        <button
          className="btn-edit"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
        <div>
          <Modal>
            <h4>Detail Mahasiswa</h4>
            <p>ID : {contact.id}</p>
            <p>Nama : {contact.nama}</p>
            <p>Kelas : {contact.kelas}</p>
            <p>IP : {contact.ip}</p>
            <p>IPK : {contact.ipk}</p>
            <p>Jurusan : {contact.jurusan}</p>
            <p>Umur : {contact.umur}</p>
            <p>Asal Kota : {contact.asal}</p>
            <p>Tanggal Lahir : {contact.tanggal_lahir}</p>
            <p>NIM : {contact.nim}</p>
            <p>Tanggal Masuk : {contact.tanggal_masuk}</p>
            <p>Mata Kuliah : {contact.mata_kuliah}</p>
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
