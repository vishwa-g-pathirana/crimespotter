import React, { Fragment, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import { Collections } from "@mui/icons-material";
import { db } from "../firebase-config";
import {collection, getDocs ,addDoc, deleteDoc ,doc} from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message1 = `i need help`;

const Inbox = () => {
  const [message, setMessage] = useState([]);
  const usersCollectionRef = collection(db, "inbox")

const getMsg = async () => {
const data = await getDocs(usersCollectionRef);
setMessage(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

};

const deleteMsg = async (id) => {
  const userDoc = doc(db, "inbox", id);
  await deleteDoc(userDoc);
  getMsg();
};
  useEffect (() => {
getMsg()
  },[]);
  setInterval(getMsg,10000);
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 0 }}>
        {message.map((msg)=>{
          return <StyledPaper
          sx={{
              backgroundColor: '#b5c7d0',
            my: 1,
            mx: 0,
            p: 1,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
            </Grid>
            <Grid item xs>
              <Typography sx={{color: 'gray'}} variant="h9">{msg.name}</Typography>
              <Typography>{msg.message}</Typography>
            </Grid>
            <IconButton onClick={()=>{deleteMsg(msg.id)}} sx={{color: '#781f19'}} aria-label="upload picture" component="span">
    <RemoveCircleOutlineIcon />
  </IconButton>
          </Grid>
        </StyledPaper>
        })}


      </Box>

    </Fragment>
  );
};
export default Inbox;
