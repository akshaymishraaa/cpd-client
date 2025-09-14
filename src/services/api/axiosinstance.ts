// src/api/axiosInstance.ts
import type { AxiosResponse, AxiosInstance } from "axios";
import axios from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

// Base URL (can be from .env)
const BASE_URL = VITE_API_BASE_URL || "http://localhost:5000/api";

// Helper to get auth token (update as per your auth logic)
const getToken = (): string | null => {
  return localStorage.getItem("token"); // or from Redux/Zustand
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Handle 401 Unauthorized globally
    if (error.response?.status === 401) {
      console.error("Unauthorized, redirecting to login...");
      // Example: window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
