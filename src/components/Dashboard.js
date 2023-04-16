import React from "react"
import Search from "./Search"
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { Typography } from "@mui/material";
import Body from "./Body";
import FormText from "./Form";



function Dashboard(){
    return(
        <div>
        <i>{ <BakeryDiningIcon />}</i>
        
        <Typography variant="h3" colour="primary" sx={{ mt:2}}>
        Mariah's Bakery and Pastries
        </Typography>
        <Typography variant="h4" colour="primary" sx={{ mt:2}}>
        Logistical information 
        </Typography>
        <FormText />
        <Typography variant="h5" colour="primary">
        Rider Information
        </Typography>
        <Body />
        <Search />

        </div>
      )
      }
export default Dashboard

