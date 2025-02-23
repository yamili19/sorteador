import { useState } from "react";
import DragAndDrop from "./DragAndDrop.jsx";
import NextButton from "./NextButton";
import Modal from "../Modal/Modal"; // Importamos el modal
import "./UploadParticipants.css";

const UploadParticipants = ({ onNext }) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const handleFileUpload = (success) => {
    if (success) {
      setFileUploaded(true);
      setModalMessage(null); // Limpiar mensaje si se sube el archivo
    }
  };

  const handleNext = () => {
    if (!fileUploaded) {
      setModalMessage({
        text: "Debe subir un archivo antes de continuar.",
        type: "error",
      });
      setModalVisible(true);
      return;
    }
    onNext();
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Cargar Participantes</h2>
      <DragAndDrop onFileUpload={handleFileUpload} />
      <NextButton onClick={handleNext} text="Siguiente" />

      {/* Mostrar el modal si hay error */}
      {modalVisible && <Modal message={modalMessage} onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default UploadParticipants;
