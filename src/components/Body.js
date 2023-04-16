import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

let url = 'http://localhost:9292/riders'
export default function Body() {

  const[info, setInfo]= useState([])

  // const[edit, setEdit]= useState({
  //   name: name,
  //   id_no: id_no,
  //   nationality: nationality,
  //   phone_number: phone_number,
  //   plate_number: plate_number
  // })

  function handleDelete(id){
    fetch(`${url}/${id}`,{
      method:"DELETE",
      })
      .then(res=> res.json())
      .then(()=> {
      const newRiderList = info.filter(item=> item.id !== id) 
      setInfo(newRiderList)
      window.location.reload(true)});
      ;
      }

   useEffect(()=>{fetch('http://localhost:9292/riders')
    .then(res => res.json())
    .then(data =>{
      setInfo(data);
      // SetSearch(data)
    })
  },[])
    
  // function handleUpdate(e){
  //   const name = e.target.name;
  //   const value = e.target.value;
  // }

  return (
    <TableContainer component={Paper} style={{ maxHeight: 225}} >
      <Table stickyHeader sx={{ minWidth: 650 , mt: 2 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Id Number</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Plate Number</TableCell>
            <TableCell align="right">Dismiss rider</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {info.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, maxHeight:5 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.id_no}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.phone_number}</TableCell>
              <TableCell align="right">{row.plate_number}</TableCell>
              <TableCell align="right">
                {/* <IconButton
                      aria-label="edit"
                      onClick={() => handleUpdate(row.id)}
                    >
                  <EditIcon />
                </IconButton> */}
                <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(row.id)}
                    >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



