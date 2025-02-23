import { useState } from "react";
import ImageUploader from "./ImageUploader";
import Modal from "../Modal/Modal"; // Asegúrate de importar el modal correctamente
import "./UploadPrizeForm.css";

const UploadPrizeForm = ({ idPremio, onAddPrize }) => {
  const [nombrePremio, setNombrePremio] = useState("");
  const [nombreSponsor, setNombreSponsor] = useState("");
  const [imagenSponsor, setImagenSponsor] = useState(""); // Guardará la imagen en base64
  const [message, setMessage] = useState(null); // Estado para el mensaje

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombrePremio || !nombreSponsor || !imagenSponsor) {
      setMessage({ type: "error", text: "Todos los campos son obligatorios." });
      return;
    }

    // Crear objeto de premio
    const newPrize = {
      idPremio,
      nombrePremio,
      nombreSponsor,
      imagenSponsor,
    };

    onAddPrize(newPrize);

    // Limpiar campos
    setNombrePremio("");
    setNombreSponsor("");
    setImagenSponsor("");

    setMessage({ type: "success", text: "Premio agregado correctamente." });
  };

  const handleCloseModal = () => {
    setMessage(null); // Cerrar el modal
  };

  return (
    <div className="prize-form">
      <h3>Premio #{idPremio}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Premio"
          value={nombrePremio}
          onChange={(e) => setNombrePremio(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre del Sponsor"
          value={nombreSponsor}
          onChange={(e) => setNombreSponsor(e.target.value)}
          required
        />
        <ImageUploader setImagenBase64={setImagenSponsor} />
        <button type="submit" className="submit-btn">Agregar Premio</button>
      </form>

      {/* Contenedor para la imagen */}
      {imagenSponsor && (
        <div className="image-container">
          <img src={imagenSponsor} alt="Imagen del Sponsor" style={{ width: "100%" }} />
        </div>
      )}

      {/* Modal para mostrar el mensaje */}
      <Modal message={message} onClose={handleCloseModal} />
    </div>
  );
};

export default UploadPrizeForm;
