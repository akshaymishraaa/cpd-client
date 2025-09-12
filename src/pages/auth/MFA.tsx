import React, { useState } from 'react'
import { TextField, Button, Box, Typography, Paper } from '@mui/material'

const MFA = () => {
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement MFA logic
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f6fa' }}>
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" mb={2} align="center">Multi-Factor Authentication</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter OTP"
            type="text"
            fullWidth
            margin="normal"
            required
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Verify
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Button href="/auth/login" size="small">Back to Login</Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default MFA