import React from "react";
import { useState } from "react";
import {Modal} from "../components/modal.component"

export function BlankPage () {
const [showModal, setShowModal] = useState(false);
  return (
    <div className="upload-button">
      <button onClick={() => setShowModal(true)}>
        Upload
      </button>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
}