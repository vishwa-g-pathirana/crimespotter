import React, { Fragment } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import WaterIcon from '@mui/icons-material/Water';
import CloudIcon from '@mui/icons-material/Cloud';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Weather = () =>{
    const theme = useTheme();
    return <Fragment>
 <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#70807c',color: 'white'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Kiribathgoda
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Western/Sri Lanka
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton sx={{color:'white'}} aria-label="previous">
            {theme.direction === 'rtl' ? <WaterIcon /> : <ThermostatIcon />}
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="play/pause">
            <CloudIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton sx={{color: 'white'}} aria-label="next">
            {theme.direction === 'rtl' ? <ThermostatIcon /> : <WaterIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://swall.teahub.io/photos/small/288-2884180_minimalist-4k.jpg"
        alt="Live from space album cover"
      />
    </Card>
    </Fragment>
}
export default Weather;