import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Chat() {
  return (
    <Box className="flex flex-col h-1/1 w-1/4">
        <div className="h-8/10">
            <Typography style={{color: 'black'}}>
                Quant Assist
            </Typography>
        </div>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
    </Box>
  )
}
