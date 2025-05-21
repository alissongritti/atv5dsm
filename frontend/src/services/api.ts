import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3001", // Mude para seu backend local
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;