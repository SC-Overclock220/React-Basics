import React from "react";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="App">
        <h1>Click on this button to open the Modal</h1>
        <button className="openModalBtn" onClick={() => setShowModal(true)}>
          Open Modal
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default App;
