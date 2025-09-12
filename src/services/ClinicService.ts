import axios from 'axios'
const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

export const registerClinic = async (data: { name: string; address: string }) => {
  const res = await API.post('/clinic/register', data)
  return res.data
}

export const getDoctors = async () => {
  const res = await API.get('/doctor/list')
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