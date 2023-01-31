import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Modal from "./Modal";

function Table() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nama: "",
    kelas: "",
    ip: "",
    ipk: "",
    jurusan: "",
    umur: "",
    asal: "",
    tanggal_lahir: "",
    nim: "",
    tanggal_masuk: "",
    mata_kuliah: "",
  });

  const [editFormData, setEditFormData] = useState({
    nama: "",
    kelas: "",
    ipk: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      nama: addFormData.nama,
      kelas: addFormData.kelas,
      ip: addFormData.ip,
      ipk: addFormData.ipk,
      jurusan: addFormData.jurusan,
      umur: addFormData.umur,
      asal: addFormData.asal,
      tanggal_lahir: addFormData.tanggal_lahir,
      nim: addFormData.nim,
      tanggal_masuk: addFormData.tanggal_masuk,
      mata_kuliah: addFormData.mata_kuliah,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      nama: editFormData.nama,
      kelas: editFormData.kelas,
      ipk: editFormData.ipk,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValue = {
      nama: contact.nama,
      kelas: contact.kelas,
      ipk: contact.ipk,
    };

    setEditFormData(formValue);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  }

  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Kelas</th>
              <th>IPK</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form className="form1" action="" onSubmit={handleAddFormSubmit}>
        <label htmlFor="nama" className="nama">
          Nama
        </label>
        <input
          type="text"
          name="nama"
          required="required"
          placeholder="Masukan nama..."
          onChange={handleAddFormChange}
        />
        <label htmlFor="kelas" className="kelas">
          Kelas
        </label>
        <input
          type="number"
          name="kelas"
          required="required"
          placeholder="Masukan kelas (1, 2, 3, 4)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="ip" className="ip">
          IP Semester
        </label>
        <input
          type="number"
          name="ip"
          required="required"
          placeholder="Masukan ip (1, 2, 3, 4)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="ipk" className="ipk">
          IPK
        </label>
        <input
          type="number"
          name="ipk"
          required="required"
          placeholder="Masukan ipk (1, 2, 3, 4)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="jurusan" className="jurusan">
          Jurusan
        </label>
        <input
          type="text"
          name="jurusan"
          required="required"
          placeholder="Masukan jurusan (MB, AK, LB, TI, MI, EC)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="umur" className="umur">
          Umur
        </label>
        <input
          type="number"
          name="umur"
          required="required"
          placeholder="Masukan umur..."
          onChange={handleAddFormChange}
        />
        <label htmlFor="asal" className="asal">
          Asal Kota
        </label>
        <input
          type="text"
          name="asal"
          required="required"
          placeholder="Masukan asal kota..."
          onChange={handleAddFormChange}
        />
        <label htmlFor="tanggal_lahir" className="tanggal_lahir">
          Tanggal Lahir
        </label>
        <input
          type="number"
          name="tanggal_lahir"
          required="required"
          placeholder="Masukan tanggal lahir (01/06/1997)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="nim" className="nim">
          NIM
        </label>
        <input
          type="number"
          name="nim"
          required="required"
          placeholder="Masukan nim (4164068)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="tanggal_masuk" className="tanggal_masuk">
          Tanggal Masuk
        </label>
        <input
          type="number"
          name="tanggal_masuk"
          required="required"
          placeholder="Masukan tanggal masuk (01/04/2011)"
          onChange={handleAddFormChange}
        />
        <label htmlFor="mata_kuliah" className="mata_kuliah">
          Mata Kuliah
        </label>
        <input
          type="text"
          name="mata_kuliah"
          required="required"
          placeholder="Masukan mata kuliah..."
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn-form">
          Add
        </button>
      </form>
    </div>
  );
}

export default Table;
