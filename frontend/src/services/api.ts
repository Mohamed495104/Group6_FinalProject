import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// User API
export const userAPI = {
  createOrUpdate: async (userData: { firebaseUid: string; email: string; name: string }) => {
    const response = await api.post("/users", userData);
    return response.data;
  },
  getByFirebaseUid: async (firebaseUid: string) => {
    const response = await api.get(`/users/${firebaseUid}`);
    return response.data;
  },
};

// Support API
export const supportAPI = {
  sendMessage: async (messageData: { name: string; email: string; message: string }) => {
    const response = await api.post("/support", messageData);
    return response.data;
  },
};

export default api;
