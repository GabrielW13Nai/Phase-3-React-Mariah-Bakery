import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';




  



export default function Body() {

  const[info, SetInfo]= useState([])
  // const[search, SetSearch]= useState([])

   useEffect(()=>{fetch('http://localhost:9292/riders')
    .then(res => res.json())
    .then(data =>{
      SetInfo(data);
      // SetSearch(data)
    })
  },[])
    
  // function searchData(){
  //   search.filter(values=> values)
  // }

  return (
    <TableContainer component={Paper} style={{ maxHeight: 250} }>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Names</TableCell>
            <TableCell align="right">Id Number</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Plate Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {info.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, maxHeight:5 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id_no}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.phone_number}</TableCell>
              <TableCell align="right">{row.plate_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



