import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Breakingnews = () => {
    return <Fragment>
<Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i2-prod.mylondon.news/incoming/article23404254.ece/ALTERNATES/s615/0_Screenshot-2022-03-16-at-112329.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sri Lanka defaults on debt....
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sri Lanka has defaulted on its debt for the first....
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Fragment>
}
export default Breakingnews;