import React from "react";
import "./Modal.css"; // Estilos para el modal

const Modal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal ${message.type}`}>
        <p>{message.text}</p>
        <button onClick={onClose} className="close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
