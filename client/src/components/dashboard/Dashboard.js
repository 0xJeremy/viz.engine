import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RightPanel from "./RightPanel";
import LogOutput from "./LogOutput";
import Camera from "./Camera";
import Interactions from './Interactions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const socket = props.socket;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid  item xs>
          <Camera socket={socket}/>
        </Grid>

        <Grid item xs>
          <RightPanel socket={socket}/>
        </Grid>

      </Grid>

      <Interactions />

    </div>
  );
}