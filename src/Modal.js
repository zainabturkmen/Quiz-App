import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return <div className={`${isModalOpen? ""}`}></div>
};

export default Modal;
