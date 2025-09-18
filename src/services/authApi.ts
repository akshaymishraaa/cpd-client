import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const login = async (data: { email: string; password: string }) => {
  const res = await API.post('/clinics/auth/login', data)
  return res.data
}

export const register = async (data: { email: string; password: string; role: string }) => {
  const res = await API.post('/auth/register', data)
  return res.data
}

export const forgotPassword = async (email: string) => {
  const res = await API.post('/auth/forgot-password', { email })
  return res.data
}

export const verifyMFA = async (code: string) => {
  const res = await API.post('/auth/mfa', { code })
  return res.data
}