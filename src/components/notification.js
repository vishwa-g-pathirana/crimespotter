import React, { Fragment, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Notifications = () => {
  const [message, setMessage] = useState([]);
  const usersCollectionRef = collection(db, "alert");

  const getMsg = async () => {
    const data = await getDocs(usersCollectionRef);
    setMessage(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteMsg = async (id) => {
    const userDoc = doc(db, "alert", id);
    await deleteDoc(userDoc);
    getMsg();
  };
  useEffect(() => {
    getMsg();
  }, []);
  setInterval(getMsg, 10000);
  return (
    <Fragment>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {message.map((msg) => {
          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>N</Avatar>
              </ListItemAvatar>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h9" component="div">
                    {msg.name}
                  </Typography>
                  <Chip icon={<LocationOnIcon />} label={msg.location} />
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      deleteMsg(msg.id);
                    }}
                    size="small"
                  >
                    Response
                  </Button>
                </CardActions>
              </Card>
            </ListItem>
          );
        })}
        <Divider variant="inset" component="li" />
      </List>
    </Fragment>
  );
};
export default Notifications;
