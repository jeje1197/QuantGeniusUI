import { Box, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Chat() {
  return (
    <Box className="flex flex-col h-1/1 w-1/4">
        <Box className="h-8/10">
            <Typography variant='h5' style={{
                color: 'black',
                textAlign: 'center',
                padding: '1rem'
            }}>
                Quant Assist - AI Assistant
            </Typography>
            <Divider />
        </Box>
        
        <Box className="h-1/10 align-self-end" sx={{ width: 500, maxWidth: '100%' }}>
            {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        </Box>
    </Box>
  )
}
