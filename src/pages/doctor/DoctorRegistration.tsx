import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { registerDoctor } from '../../services/doctorService'

const RegisterDoctor = () => {
  const [name, setName] = useState('')
  const [specialization, setSpecialization] = useState('')
  const mutation = useMutation({ mutationFn: () => registerDoctor({ name, specialization }) })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" mb={2}>Register Doctor</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Doctor Name" fullWidth required value={name} onChange={e => setName(e.target.value)} margin="normal" />
          <TextField label="Specialization" fullWidth required value={specialization} onChange={e => setSpecialization(e.target.value)} margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
        {mutation.isSuccess && <Typography color="success.main" mt={2}>Doctor registered!</Typography>}
        {mutation.isError && <Typography color="error" mt={2}>Error: {mutation.error?.message}</Typography>}
      </Paper>
    </Box>
  )
}
export default RegisterDoctor