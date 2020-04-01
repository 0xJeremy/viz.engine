import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RobotCard from "./RobotCard";
import ControlPanel from "./ControlPanel";
import LogOutput from "./LogOutput";
import Camera from "./Camera";
import Interactions from './Interactions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  camera: {
    borderRadius: '6px',
    border: '1px rgb(100, 100, 100) solid',
    borderWidth: '10px 2px 2px 2px',
    marginBottom: '16px',
    marginRight: '8px'
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const socket = props.socket;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid className={classes.camera} item xs>
          <Camera socket={socket}/>
        </Grid>

        <Grid item xs>
          <RobotCard socket={socket}/>
        </Grid>

      </Grid>

      <Interactions />

    </div>
  );
}