import React, { useState } from 'react'
import { TextField, Button, Box, Typography, Paper } from '@mui/material'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement forgot password logic
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f6fa',width:'100vw' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2} align="center">Forgot Password</Typography>
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
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Send Reset Link
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Button href="/auth/login" size="small">Back to Login</Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default ForgotPassword