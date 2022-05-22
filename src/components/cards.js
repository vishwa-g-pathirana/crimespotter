import React, { Fragment } from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Calander from "./cards/calender";
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import Weather from "./cards/weather";

import Lclock from "./liveclock";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Cards =()=>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return <Fragment>
<div>
      <Stack
        direction={{ xs: 'row', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx = {{height:60, padding: 2,color:'white', backgroundColor: '#444c44'}}>
        <Typography variant="h5" gutterBottom component="div">
        {date}
      </Typography>

        </Item>

        <Item sx = {{height:60, padding: 2,color:'white', backgroundColor: '#444c44'}}>
        <Typography variant="h5" gutterBottom component="div">
        <Lclock />
      </Typography>
        </Item>
      </Stack>
    </div>
    </Fragment>
}
export default Cards;