import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

function MultipleChoiceSelection({choices}: {choices: any[]}) {
    return (
        <FormControl style={{paddingLeft: '1rem'}}>
            <FormLabel id="demo-radio-buttons-group-label">
                Select your answer
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{
                    marginTop: '0.5rem'
                }}
            >
                {choices?.map(choice => {
                    return <FormControlLabel value={choice.label} control={<Radio />} label={choice.label} />
                })}
            </RadioGroup>
        </FormControl>
    )
}

export default function quiz() {
    const currentQuestion = 1;
    const questionText = 'Question Text';
    const choices = [
        {label: 'A', text: 'Text'},
        {label: 'B', text: 'Text'},
        {label: 'C', text: 'Text'},
        {label: 'D', text: 'Text'}
    ]

  return (
    <Box className='flex flex-col w-8/10'>
        <div className='align-self-center'>
            Quiz
        </div>
        <div>
            <Typography variant='h4'>
                Question {currentQuestion}
            </Typography>

            <Typography>
                {questionText}
            </Typography>
            
            <Divider style={{marginBottom: '1rem'}}/>
            {
                choices.length ? (
                    <MultipleChoiceSelection choices={choices}/>
                ) : (
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                )
            }
            
        </div>
    </Box>
  )
}
