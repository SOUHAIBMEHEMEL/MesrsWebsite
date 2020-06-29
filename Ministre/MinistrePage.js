import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Bibliographie from './Bibliographie';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
  }));

export default function MinistrePage() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Bibliographie></Bibliographie>
        </Paper>
      </div>
    );
  }