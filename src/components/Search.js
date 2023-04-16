import React, { useEffect } from 'react'
import { useState } from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Search() {
// const [value, setValue] = useState('');
const [result, setResult] = useState([])
// const searchId = useParams()

 useEffect(() => {
  fetch("http://localhost:9292/ongoing")
  .then(r=> r.json())
  .then(data=>{
    setResult(data);
  });
},[]);

    // function handleChange(e){
    //   setValue(e.target.value)
    // }
    // function handleValue(e){
    //   const final = result.filter(val => 
    //    val.rider.name.toLowerCase().includes(e.target.value.toString.toLowerCase()) ||
    //     val.name_of_order.toLowerCase().includes(value.toString.toLowerCase())
    // );
    //   setResult(final)
    // } 


    
  return(
    <>
    <div>
    <Typography variant="h5" colour="primary" sx={{mt: 2}}>
        Ongoing Orders
        </Typography>
      </div>
    <Typography 
    variant="contained" >
    <div>
      <FormControl sx={{ mt: 2, minWidth: 20}}>
      <div>
      <TextField
        required
        type='text'
        id="value"
        label="value"
        sx={{ mt:1, ml: 30}}
        // onChange={handleChange}
      />
      </div>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={value}
          sx={{maxWidth: 200, mt: -7, display: "flex"}}
          label="Select category"
          // onChange={handleChange}
        >
          <MenuItem value="Rider Name">Rider Name</MenuItem>
          <MenuItem value="Order Name">Order Name</MenuItem>
        </Select>
        </FormControl>
        <Button 
        startIcon={<PersonSearchIcon />}
        variant="contained"
        colour="secondary"
        size="small"
        className='search'
        // onClick={()=>handleValue}
        sx={{ mt:1, ml: 3,  minHeight: 70, maxWidth: 100}}
        >
        Search
        </Button >
      </div>
      </Typography>
      <TableContainer component={Paper} style={{ maxHeight: 175}} >
      <Table stickyHeader sx={{ minWidth: 400 , mt: 5 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name of Order</TableCell>
            <TableCell align="right">Time of order</TableCell>
            <TableCell align="right">Delivery time in minutes</TableCell>
            <TableCell align="right">Rider Id</TableCell>
            <TableCell align="right">Rider Name</TableCell>
            <TableCell align="right">Logistics team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, maxHeight:50 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name_of_order}</TableCell>
              <TableCell align="right">{row.time_of_order}</TableCell>
              <TableCell align="right">{row.delivery_time_in_minutes}</TableCell>
              <TableCell align="right">{row.rider.id}</TableCell>
              <TableCell align="right">{row.rider.name}</TableCell>
              <TableCell align="right">{row.team.name}</TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
    
    )
}


