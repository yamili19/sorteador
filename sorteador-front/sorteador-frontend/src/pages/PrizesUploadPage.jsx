import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadPrizeForm from "../components/UploadPrizes/UploadPrizeForm";
import PrizeList from "../components/UploadPrizes/PrizeList";
import { savePrize, loadDrawData } from "../services/api";
import Modal from "../components/Modal/Modal"; // Importamos el modal
import "./PrizesUploadPage.css";

const PrizesUploadPage = () => {
  const [premios, setPremios] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [showStartButton, setShowStartButton] = useState(false);
  const [message, setMessage] = useState(null); // Estado para el mensaje
  const navigate = useNavigate();

  const handleAddPrize = (prize) => {
    setPremios([...premios, { ...prize, idPremio: idCounter }]);
    setIdCounter(idCounter + 1);
  };

  const handleUploadPrizes = async () => {
    try {
      for (const premio of premios) {
        await savePrize(premio);
      }
      setMessage({ type: "success", text: "Premios subidos correctamente" });
      setShowStartButton(true);
    } catch (error) {
      setMessage({ type: "error", text: "Error al subir los premios, intente de nuevo." });
      console.error(error);
    }
  };

  const handleStartDraw = async () => {
    try {
      await loadDrawData();
      setMessage({ type: "success", text: "Datos del sorteo cargados correctamente" });
      navigate("/draw");
    } catch (error) {
      setMessage({ type: "error", text: "Error al cargar los datos del sorteo" });
      console.error(error);
    }
  };

  return (
    <div className="prizes-container">
      <h2>Cargar Premios</h2>

      {/* Mostrar el Modal si hay un mensaje */}
      <Modal message={message} onClose={() => setMessage(null)} />

      <div className="prize-form-container">
        <UploadPrizeForm idPremio={idCounter} onAddPrize={handleAddPrize} />
      </div>

      {premios.length > 0 && (
        <button type="button" className="upload-btn" onClick={handleUploadPrizes}>
          Subir Premios
        </button>
      )}

      <PrizeList premios={premios} />

      {showStartButton && (
        <button type="button" className="start-btn" onClick={handleStartDraw}>
          Comenzar Sorteo
        </button>
      )}
    </div>
  );
};

export default PrizesUploadPage;
