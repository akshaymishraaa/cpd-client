import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box, MenuItem } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { assignDoctor, getDoctors, addTimeSlot } from '../../services/ClinicService'

const DoctorManagement = () => {
  const [doctorId, setDoctorId] = useState('')
  const [slot, setSlot] = useState('')
  const doctorsQuery = useQuery({ queryKey: ['doctors'], queryFn: getDoctors })
  const assignMutation = useMutation({ mutationFn: () => assignDoctor(doctorId) })
  const slotMutation = useMutation({ mutationFn: () => addTimeSlot({ doctorId, slot }) })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Assign Doctor</Typography>
        <TextField
          select
          label="Doctor"
          fullWidth
          value={doctorId}
          onChange={e => setDoctorId(e.target.value)}
          margin="normal"
        >
          {doctorsQuery.data?.map((doc: any) => (
            <MenuItem key={doc.id} value={doc.id}>{doc.name}</MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={() => assignMutation.mutate()} sx={{ mt: 2 }}>Assign</Button>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Add Time Slot</Typography>
        <TextField label="Time Slot" fullWidth value={slot} onChange={e => setSlot(e.target.value)} margin="normal" />
        <Button variant="contained" onClick={() => slotMutation.mutate()} sx={{ mt: 2 }}>Add Slot</Button>
      </Paper>
    </Box>
  )
}
export default DoctorManagement