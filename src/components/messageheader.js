import React, { Fragment } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import Lclock from "./liveclock";

const Messageheader = () => {
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Inbox" secondary={<Lclock />} />
      </ListItem>
    </Fragment>
  );
};
export default Messageheader;
