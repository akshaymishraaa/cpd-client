import React, { useState } from 'react'
import { TextField, Button, Box, Typography, Paper, MenuItem } from '@mui/material'

const roles = [
  { value: 'patient', label: 'Patient' },
  { value: 'doctor', label: 'Doctor' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'lab', label: 'Lab' },
]

const Register = () => {
  const [role, setRole] = useState('patient')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement registration logic
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f6fa',width:'100vw' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2} align="center">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            select
            label="Role"
            fullWidth
            margin="normal"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            {roles.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
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
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Button href="/auth/login" size="small">Already have an account?</Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default Register