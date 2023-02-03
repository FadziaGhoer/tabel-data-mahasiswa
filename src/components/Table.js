import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import AddForm from "./AddForm";
import SelectForm from "./SelectForm";

function Table() {
  const [contacts, setContacts] = useState(data);
  const [query, setQuery] = useState("");
  const keys = ["nama", "mata_kuliah", "tanggal_masuk"];

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

    const checked = event.target.checked;

    let newFormData = { ...addFormData };
    if (checked) {
      newFormData[fieldName] = [...(newFormData[fieldName] || []), fieldValue];
    } else {
      newFormData[fieldName] = fieldValue;
    }

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
      ip: editFormData.ip,
      ipk: editFormData.ipk,
      jurusan: editFormData.jurusan,
      umur: editFormData.umur,
      asal: editFormData.asal,
      tanggal_lahir: editFormData.tanggal_lahir,
      nim: editFormData.nim,
      tanggal_masuk: editFormData.tanggal_masuk,
      mata_kuliah: editFormData.mata_kuliah,
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
      ip: contact.ip,
      ipk: contact.ipk,
      jurusan: contact.jurusan,
      umur: contact.umur,
      asal: contact.asal,
      tanggal_lahir: contact.tanggal_lahir,
      nim: contact.nim,
      tanggal_masuk: contact.tanggal_masuk,
      mata_kuliah: contact.mata_kuliah,
    };

    setEditFormData(formValue);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div>
      <div className="group-header">
        <input
          type="text"
          placeholder="Cari Nama..."
          className="search-box"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="date"
          placeholder="Cari Tanggal Masuk..."
          className="search-box"
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectForm />
        <AddForm
          handleAddFormSubmit={handleAddFormSubmit}
          handleAddFormChange={handleAddFormChange}
        />
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <hr />
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
            {contacts
              .filter((contact) =>
                keys.some((key) => {
                  const value =
                    typeof contact[key] === "string"
                      ? contact[key].toLowerCase()
                      : String(contact[key]).toLowerCase();
                  return value.includes(query);
                })
              )
              .map((contact) => (
                <Fragment key={contact.id}>
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
    </div>
  );
}

export default Table;
