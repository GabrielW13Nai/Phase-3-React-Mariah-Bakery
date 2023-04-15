import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

export default function Search( {handleClick}) {
  return (
    <>
    <Button 
    startIcon={<PersonSearchIcon />}
    variant="contained"
    colour="secondary"
    size="small"
    className='search'
   
    >
    Search
    </Button>
    <Typography 
    variant="contained" >
           
    </Typography>
    </>
    
    )
}
