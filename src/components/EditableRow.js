import React from "react";
import "../App.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Masukan nama..."
          name="nama"
          value={editFormData.nama}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Masukan kelas..."
          name="kelas"
          value={editFormData.kelas}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Masukan ipk..."
          name="ipk"
          value={editFormData.ipk}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="btn-save" type="submit">
          Save
        </button>
        <button
          className="btn-cancel"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
