import api from "../../services/api.js";

const uploadService = {
  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append("file", file); // Aquí agregas el archivo

    // Hacemos la solicitud POST con el formData
    const response = await api.post("/participante/cargar-excel", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Esto es importante para archivos
      },
    });

    return response.data;
  },
};

export default uploadService;


