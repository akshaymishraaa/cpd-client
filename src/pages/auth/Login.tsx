import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authApi'
import { setAuth } from '../../store/authSlice'
import { TextField, Button, Box, Typography, Paper } from '@mui/material'

const roleRoutes: Record<string, string> = {
  patient: '/patient/dashboard',
  doctor: '/doctor/dashboard',
  clinic: '/clinic/dashboard',
  admin: '/admin/user-management',
  lab: '/lab/dashboard',
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const mutation:any = useMutation({
    mutationFn: () => login({ identifier: email, password }),
    onSuccess: (data) => {
        localStorage.setItem('user', JSON.stringify(data.user))
      dispatch(setAuth({ user: data.user, token: data.token }))
      const route = roleRoutes[data.user.role] || '/'
      console.log('Navigating to:', route)
      navigate(route, { replace: true })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f6fa' ,width:'100vw' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2} align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        {mutation.isError && (
          <Typography color="error" mt={2}>{mutation.error?.message || 'Login failed'}</Typography>
        )}
      </Paper>
    </Box>
  )
}

export default Login