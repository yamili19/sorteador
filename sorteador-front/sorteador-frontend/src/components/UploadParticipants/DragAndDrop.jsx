import { useState } from "react";
import uploadService from "./uploadService";
import "./DragAndDrop.css";
import Modal from "../Modal/Modal";

const DragAndDrop = ({ onFileUpload }) => { // Recibe la prop onFileUpload
  const [file, setFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setModalMessage({ text: "Debe seleccionar un archivo", type: "error" });
      setModalVisible(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      await uploadService.uploadFile(file);

      setModalMessage({ text: "Archivo enviado correctamente", type: "success" });
      setModalVisible(true);

      // Notificar que el archivo fue subido con éxito
      onFileUpload(true);
    } catch (error) {
      console.error("Error al enviar el archivo:", error);
      setModalMessage({ text: "Error al enviar el archivo", type: "error" });
      setModalVisible(true);
    }
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <div className="drop-zone" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        {file ? <p>{file.name}</p> : <p>Arrastra un archivo .xlsx aquí</p>}
      </div>
      <button className="upload-button" onClick={handleUpload}>Subir Archivo</button>

      {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default DragAndDrop;
