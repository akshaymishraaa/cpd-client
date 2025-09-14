import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { registerClinic } from '../../services/ClinicService'

    
const RegisterClinic = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const mutation = useMutation({ mutationFn: () => registerClinic({ name, address, phone, email, password }) })
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }
  

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 ,width:'100vw'}}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" mb={2}>Register Clinic</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Clinic Name" fullWidth required value={name} onChange={e => setName(e.target.value)} margin="normal" />
          <TextField label="Address" fullWidth required value={address} onChange={e => setAddress(e.target.value)} margin="normal" />
          <TextField label="Phone Number" fullWidth required value={phone} onChange={e => setPhone(e.target.value)} margin="normal" />
          <TextField label="Email" type="email" fullWidth required value={email} onChange={e => setEmail(e.target.value)} margin="normal" />

          <TextField label="Password" type="password" fullWidth required value={password} onChange={e => setPassword(e.target.value)} margin="normal" />
          
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
        {mutation.isSuccess && <Typography color="success.main" mt={2}>Clinic registered!</Typography>}
        {mutation.isError && <Typography color="error" mt={2}>Error: {mutation.error?.message}</Typography>}
      </Paper>
    </Box>
  )
}
export default RegisterClinic