import axios from "axios";

const API_URL = "http://localhost:3000"; // Ajuste para a URL do seu backend

const api = axios.create({
    baseURL: API_URL,
});

export const getProdutos = async () => {
    try {
        const response = await api.get("/produtos");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return [];
    }
};

export default api;