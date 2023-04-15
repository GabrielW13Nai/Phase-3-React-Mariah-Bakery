import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from '@mui/material/Button'
import { useState } from 'react';




export default function FormText( ){

    const [name, SetName] = useState('')
    const [id_no, SetId] = useState('')
    const [nationality, SetNationality] = useState('')
    const [phone_number, SetPhone] = useState('')
    const [plate_number, SetPlate] = useState('')

    const handleName = e => SetName(e.target.value)
    const handleId = e => SetId(e.target.value)
    const handleNationality = e => SetNationality(e.target.value)
    const handlePhone = e => SetPhone(e.target.value)
    const handlePlate = e => SetPlate(e.target.value)

    let data = {
      name: name,
      id_no: id_no,
      nationality: nationality,
      phone_number: phone_number,
      plate_number: plate_number
    }

    function handleSubmit(e){
        fetch('http://localhost:9292/riders',{
        method:"POST",
        headers:{
            "Content-Type":'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(info=> console.log(info))
      }
  return (
    <>
    <Typography variant="h5" colour="primary">
        Rider Registration Information
    </Typography>
    <Box
      component="form" onSubmit={handleSubmit}
      className = "box"
      sx={{
        '& .MuiTextField-root': { m: 1.25, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField
        required
        type='text'
        id="name"
        label="name"
        value={data.name}
        onChange={handleName}
      />
      <TextField
        required
        id="id_no"
        label="id no"
        value={data.id_no}
        onChange={handleId}
        
      />
      <TextField
        required
        id="nationality"
        label="Nationality"
        value={data.nationality}
        onChange={handleNationality}
        
      />
      <TextField
        required
        id="phone_number"
        label="Phone Number"
        value={data.phone_number}
        onChange={handlePhone}
        
      />
      <TextField
        required
        id="plate_number"
        label="Plate Number"
        value={data.plate_number}
        onChange={handlePlate}
        
      />   
    </div>
    
    <Button 
    startIcon={<HowToRegIcon />}
    variant="contained"
    colour="secondary"
    size="small"
    className='search'
    type='submit'
    >
    Register
    </Button>
    </Box>
    
    </>
   );
}
