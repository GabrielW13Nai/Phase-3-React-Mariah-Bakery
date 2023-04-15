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
        
        <Typography variant="h3" colour="primary">
        Mariah's Bakery and Pastries
        </Typography>
        <FormText />
        <Typography variant="h6" colour="primary">
        Existing Riders
        </Typography>
        <Body />
        <Search />

        </div>
      )
      }
export default Dashboard

