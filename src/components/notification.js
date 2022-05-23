import React, { Fragment } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Notifications = () => {
    return <Fragment>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
          <Avatar>N</Avatar>
        </ListItemAvatar>
      <Card sx={{ maxWidth: 345, }}>

      <CardContent>
        <Typography gutterBottom variant="h9" component="div">
          Saman Kumara
        </Typography>
        <Chip icon={<LocationOnIcon />} label="Kiribathgoda" />
      </CardContent>
      <CardActions>
        <Button size="small">Response</Button>

      </CardActions>
    </Card>
        {/* <ListItemAvatar>
          <Avatar>N</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        /> */}
      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
    </Fragment>
}
export default Notifications;