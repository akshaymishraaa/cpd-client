import axios from 'axios'
const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

export const registerDoctor = async (data: { name: string; specialization: string }) => {
  const res = await API.post('/doctor/register', data)
  return res.data
}

export const addAvailability = async (data: { clinicId: string; slot: string }) => {
  const res = await API.post('/doctor/add-availability', data)
  return res.data
}