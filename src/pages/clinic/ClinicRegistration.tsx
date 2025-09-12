import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { registerClinic } from '../../services/ClinicService'

const RegisterClinic = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const mutation = useMutation({ mutationFn: () => registerClinic({ name, address }) })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" mb={2}>Register Clinic</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Clinic Name" fullWidth required value={name} onChange={e => setName(e.target.value)} margin="normal" />
          <TextField label="Address" fullWidth required value={address} onChange={e => setAddress(e.target.value)} margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
        {mutation.isSuccess && <Typography color="success.main" mt={2}>Clinic registered!</Typography>}
        {mutation.isError && <Typography color="error" mt={2}>Error: {mutation.error?.message}</Typography>}
      </Paper>
    </Box>
  )
}
export default RegisterClinic