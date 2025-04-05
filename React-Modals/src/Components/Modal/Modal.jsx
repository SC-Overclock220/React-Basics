import React from "react";
import "./Modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Are you sure that you want to continue?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome!Want to move forward?</p>
        </div>
        <div className="footer">
          <button onClick={() => setShowModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
