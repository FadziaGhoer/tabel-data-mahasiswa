import React, { useState } from "react";

const AddForm = ({ children, handleAddFormSubmit, handleAddFormChange }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddFormSubmit(event);
    handleClose();
  };

  const matkul = [
    "Manajemen",
    "Akuntansi",
    "Ekspor & Impor",
    "Statistika Bisnis",
    "Metode Penelitian",
    "Manajemen Keuangan",
  ];

  return (
    <>
      <button type="button" className="btn-tm" onClick={handleShow}>
        Tambah Mahasiswa
      </button>

      {show && (
        <div style={modalStyles}>
          <div style={modalContent}>
            <div>
              <button
                type="button"
                className="btn-close2"
                onClick={handleClose}
              >
                x
              </button>
              <form className="form1" action="" onSubmit={handleSubmit}>
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
                  step="0.01"
                  min="0"
                  max="4"
                  name="ip"
                  required="required"
                  placeholder="Masukan IP (0 - 4.00)"
                  onChange={handleAddFormChange}
                />
                <label htmlFor="ipk" className="ipk">
                  IPK
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  name="ipk"
                  required="required"
                  placeholder="Masukan IPK (0 - 4.00)"
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
                  type="date"
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
                  type="date"
                  name="tanggal_masuk"
                  required="required"
                  placeholder="Masukan tanggal masuk (01/04/2011)"
                  onChange={handleAddFormChange}
                />
                <label htmlFor="mata_kuliah" className="mata_kuliah">
                  Mata Kuliah
                </label>
                <hr />
                <div style={{ display: "grid" }}>
                  {matkul.map((matakuliah) => (
                    <div key={matakuliah}>
                      <input
                        type="checkbox"
                        id={matakuliah}
                        name="mata_kuliah"
                        value={matakuliah}
                        onChange={handleAddFormChange}
                      />
                      <div>{matakuliah}</div>
                    </div>
                  ))}
                </div>
                <button type="submit" className="btn-form">
                  Add
                </button>
                {children}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const modalStyles = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalContent = {
  position: "absolute",
  justifycontent: "flex-end",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "0.5rem",
};

export default AddForm;
