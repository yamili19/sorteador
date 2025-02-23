import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const savePrize = (prize) => api.post("/premio/guardar", prize);
export const loadDrawData = () => api.get("/sorteo/cargar-datos");

export const getPremios = async () => {
  const response = await api.get("/premio/listar");
  return response.data;
};

export const resetearSorteo = async () => {
  try {
    const response = await api.post("/sorteo/resetear");
    return response.data;
  } catch (error) {
    console.error("Error al resetear el sorteo:", error);
    throw error;
  }
};

export const getHistorial = async () => {
  const response = await api.get("/sorteo/listar");
  return response.data;
};

export const getUltimoSorteo = async () => {
  const response = await api.get("/sorteo/ultimo-sorteo");
  return response.data;
};

export default api;
