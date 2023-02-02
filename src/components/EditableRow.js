import React from "react";
import "../App.css";
import { AiTwotoneSave } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

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
          <AiTwotoneSave size='1.7rem'/>
        </button>
        <button
          className="btn-cancel"
          type="button"
          onClick={handleCancelClick}
        >
          <MdCancel size='1.7rem'/>
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
