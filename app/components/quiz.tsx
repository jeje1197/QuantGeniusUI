'use client'

import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { generateQuestion } from '../api/backend'

function MultipleChoiceSelection({choices}: {choices: any[]}) {
    return (
        <FormControl style={{
            // paddingLeft: '1rem'
        }}>
            <FormLabel id="demo-radio-buttons-group-label">
                Select your answer
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{
                    marginTop: '0.5rem',
                    color: 'black'
                }}
            >
                {choices?.map(choice => {
                    return <FormControlLabel value={choice.label} control={<Radio />} label={choice.text} />
                })}
            </RadioGroup>
        </FormControl>
    )
}

export default function quiz() {
    const exampleQuestion = {
            question: 'If f(x) = x^2 - 4x + 3 and g(x) = 2x - 1, what is the value of f(g(3))?',
            inputType: 'multiple-choice',
            choices: [
                {label: 'A', text: '3'},
                {label: 'B', text: '5'},
                {label: 'C', text: '8'},
                {label: 'D', text: '11'}
            ],
            answer: 'C'
        };
    const [question, setQuestion] = useState(undefined as any);

    useEffect(() => {
        // Call API
        const getQuestion = async () => {
            const response = await generateQuestion();
            console.log('Generated question:', response);
            setQuestion(response.at(0));
        }

        getQuestion();
    }, []);

    const currentQuestion = 1;

  return (
    <Box className='flex flex-col w-6/10 border-l-3 border-r-3 mt-0 mb-0'>
        <Typography variant='h4' style={{
            color: 'black',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            paddingLeft: '0.75rem'
        }}>
            Question {currentQuestion}
        </Typography>
        <Divider style={{
            marginTop: '0rem'
        }}/>

        <Box className="flex flex-col h-1/4 justify-content-center p-5">
            <Typography style={{
                color: 'black',
                marginTop: '2rem',
            }}>
                {question?.question}
            </Typography>
        </Box>
        <Divider style={{
            paddingTop: '0rem',
            marginTop: '0rem',
            marginBottom: '1rem'
        }}/>
        <Box className="p-4">
            {
                question?.choices?.length ? (
                    <MultipleChoiceSelection choices={question.choices}/>
                ) : (
                    <TextField id="outlined-basic" variant="outlined" label="Your answer"/>
                )
            }
            <Box className="mt-2">
                <Button variant='contained'>
                    Submit
                </Button>
            </Box>
        </Box>
    </Box>
  )
}
