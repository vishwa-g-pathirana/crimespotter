import React, { Fragment } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import Divider from '@mui/material/Divider';
import CircularStatic from "./loadings/newaloading";
const News = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return <Fragment>
 <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
<CircularStatic />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Loading Breaking News" secondary={date} />
      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
    </Fragment>
}
export default News