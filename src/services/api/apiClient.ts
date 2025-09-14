// src/api/apiClient.ts
import axiosInstance from "./axiosinstance";
import type { AxiosResponse } from "axios";

// ----- Public Routes -----
export const publicApi = {
  get: <T>(url: string, params?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.get(url, { params }),

  post: <T>(url: string, data?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.post(url, data),

  // file download (blob)
  download: <T>(url: string, params?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.get(url, { params, responseType: "blob" }),
};

// ----- Private Routes (with auth headers) -----
export const privateApi = {
  get: <T>(url: string, params?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.get(url, { params }),

  post: <T>(url: string, data?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.post(url, data),

  put: <T>(url: string, data?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.put(url, data),

  delete: <T>(url: string): Promise<AxiosResponse<T>> =>
    axiosInstance.delete(url),

  // file upload (FormData)
  upload: <T>(url: string, formData: FormData): Promise<AxiosResponse<T>> =>
    axiosInstance.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  // file download (blob)
  download: <T>(url: string, params?: object): Promise<AxiosResponse<T>> =>
    axiosInstance.get(url, { params, responseType: "blob" }),
};
