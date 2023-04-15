// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar'
import { Stack } from '@mui/material';

function App() {
  return (
    <>
    <Stack direction="row" justifyContent="space-between" >
    <Sidebar />
    <Dashboard />
    <Rightbar />

    </Stack>
    </>
    
  )
   
}

export default App;
