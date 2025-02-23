import React, { useEffect, useState } from "react";
import PremioComponent from "../components/Draw/PremioComponent";
import SorteoComponent from "../components/Draw/SorteoComponent";
import HistorialComponent from "../components/Draw/HistorialComponent";
import "./DrawPage.css";
import { getPremios, getHistorial, getUltimoSorteo, resetearSorteo } from "../services/api";
import { useNavigate } from "react-router-dom";

const DrawPage = () => {
  const [premio, setPremio] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [indicePremio, setIndicePremio] = useState(0);
  const [listaPremios, setListaPremios] = useState([]);
  const [isSortearEnabled, setIsSortearEnabled] = useState(true);
  const [isSiguientePremioEnabled, setIsSiguientePremioEnabled] = useState(false);
  const [finSorteo, setFinSorteo] = useState(false);

  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const cargarPremios = async () => {
      try {
        const premios = await getPremios();
        if (premios.length > 0) {
          setListaPremios(premios);
          setPremio(premios[0]);
        }
      } catch (error) {
        console.error("Error al obtener los premios:", error);
      }
    };
    cargarPremios();
  }, []);

  const handleSortear = async () => {
    try {
      const historialActualizado = await getHistorial();
      setHistorial(historialActualizado);
      
      const nuevoSorteo = await getUltimoSorteo();
      if (!historialActualizado.some(sorteo => sorteo.idPremio === nuevoSorteo.idPremio)) {
        setHistorial(prevHistorial => [...prevHistorial, nuevoSorteo]);
      }
      
      setIsSortearEnabled(false);
      setIsSiguientePremioEnabled(true);
    } catch (error) {
      console.error("Error al realizar el sorteo:", error);
    }
  };

  const handleSiguientePremio = () => {
    if (indicePremio + 1 < listaPremios.length) {
      setIndicePremio(prev => prev + 1);
      setPremio(listaPremios[indicePremio + 1]);
      setIsSortearEnabled(true);
      setIsSiguientePremioEnabled(false);
    } else {
      setFinSorteo(true);
    }
  };

  // Función para resetear y redirigir
  const handleResetAndReturn = async () => {
    try {
      // Llamamos a la función de reset en el API
      await resetearSorteo();

      // Limpiamos los estados del frontend
      setPremio(null);
      setHistorial([]);
      setListaPremios([]);
      setIndicePremio(0);
      setIsSortearEnabled(true);
      setIsSiguientePremioEnabled(false);
      setFinSorteo(false);

      // Redirigimos a la página principal
      navigate("/");  // Redirige a la página principal
    } catch (error) {
      console.error("Error al resetear el sorteo:", error);
    }
  };

  return (
    <div className="draw-page">
      <div className="left">
        {premio && <PremioComponent premio={premio} />}
        <button onClick={handleSiguientePremio} disabled={!isSiguientePremioEnabled}>
          Siguiente Premio
        </button>
      </div>

      <div className="center">
        <SorteoComponent
          historial={historial}
          onSortear={handleSortear}
          isSortearEnabled={isSortearEnabled}
        />
      </div>

      <div className="right">
        <HistorialComponent historial={historial} />
      </div>

      <button onClick={handleResetAndReturn} className="reset-button">
        Resetear y Volver
      </button>

      {finSorteo && <div className="fin-sorteo">🎉 Fin del sorteo Felicitaciones a los ganadores 🎉</div>}
    </div>
  );
};

export default DrawPage;
