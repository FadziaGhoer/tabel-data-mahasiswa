import React, { useState } from "react";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn-details" onClick={handleShow}>
        Details
      </button>

      {show && (
        <div style={modalStyles}>
          <div style={modalContent}>
            <button type="button" onClick={handleClose}>
              Close
            </button>
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
  backgroundColor: "rgba(0,0,0,0.5)"
};

const modalContent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "0.5rem"
};

export default Modal;
