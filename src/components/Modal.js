import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn-details" onClick={handleShow}>
        <AiFillEye size='2rem'/>
      </button>

      {show && (
        <div style={modalStyles}>
          <div style={modalContent}>
            <div className="popup-header">
              <h4 className="modal-h4">Detail Mahasiswa</h4>
              <button type="button" className="btn-close" onClick={handleClose}>
                x
              </button>
            </div>
            {children}
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

export default Modal;
