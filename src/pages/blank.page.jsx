import React from "react";
import { useState } from "react";
import {Modal} from "../components/modal.component"

export function BlankPage () {
const [showModal, setShowModal] = useState(false);
  return <>
   <button onClick={() => setShowModal(true)}>Show Modal</button>
  {showModal && <Modal closeModal={setShowModal} />}
  </>;
}