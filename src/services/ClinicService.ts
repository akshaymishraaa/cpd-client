import axios from 'axios'
import { privateApi, publicApi } from './api/apiClient';
const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

export const registerClinic = async (data: { name: string; address: string, phone: any, email: any, password: any }) => {
  await publicApi.post('/clinic/register', data).then(res => res.data)
}

export const getDoctors = async () => {
  const res = await privateApi.get('/doctor/list')
  return res.data
}

export const assignDoctor = async (doctorId: string) => {
  const res = await API.post('/clinic/assign-doctor', { doctorId })
  return res.data
}

export const addTimeSlot = async (data: { doctorId: string; slot: string }) => {
  const res = await API.post('/clinic/add-slot', data)
  return res.data
}