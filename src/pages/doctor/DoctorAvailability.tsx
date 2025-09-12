import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { addAvailability } from '../../services/doctorService'

const Availability = () => {
  const [clinicId, setClinicId] = useState('')
  const [slot, setSlot] = useState('')
  const mutation = useMutation({ mutationFn: () => addAvailability({ clinicId, slot }) })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" mb={2}>Add Availability</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Clinic ID" fullWidth required value={clinicId} onChange={e => setClinicId(e.target.value)} margin="normal" />
          <TextField label="Time Slot" fullWidth required value={slot} onChange={e => setSlot(e.target.value)} margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Add Availability</Button>
        </form>
        {mutation.isSuccess && <Typography color="success.main" mt={2}>Availability added!</Typography>}
        {mutation.isError && <Typography color="error" mt={2}>Error: {mutation.error?.message}</Typography>}
      </Paper>
    </Box>
  )
}
export default Availability