import React from "react";
import "../App.css";
import Modal from "./Modal";
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai'

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
          <AiTwotoneEdit size='2rem' />
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <AiFillDelete size='2rem' />
        </button>
        <>
          <Modal>
            <hr />
            <div className="wrap-details-1">
              <div className="wrap-detail-2">
                <p className="j">ID</p>
                <p className="i">{contact.id}</p>
                <p className="j">Nama</p>
                <p className="i">{contact.nama}</p>
                <p className="j">Kelas</p>
                <p className="i">{contact.kelas}</p>
                <p className="j">Jurusan</p>
                <p className="i">{contact.jurusan}</p>
                <p className="j">IP</p>
                <p className="i">{contact.ip}</p>
                <p className="j">IPK</p>
                <p className="i">{contact.ipk}</p>
              </div>
              <div>
                <p className="j">NIM</p>
                <p className="i">{contact.nim}</p>
                <p className="j">Umur</p>
                <p className="i">{contact.umur}</p>
                <p className="j">Asal Kota</p>
                <p className="i">{contact.asal}</p>
                <p className="j">Tanggal Lahir</p>
                <p className="i">{contact.tanggal_lahir}</p>
                <p className="j">Tanggal Masuk</p>
                <p className="i">{contact.tanggal_masuk}</p>
                <p className="j">Mata Kuliah</p>
                <p className="i1">{contact.mata_kuliah}</p>
              </div>
            </div>
          </Modal>
        </>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
