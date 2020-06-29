import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 420,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/blogBg.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Grid>
  );
}
