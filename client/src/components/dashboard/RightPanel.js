import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import RobotStatus from './RobotStatus';
import ProcessorStatus from './ProcessorStatus';
import ButtonPanel from './ButtonPanel';
import SensorStatus from './SensorStatus';

const useStyles = makeStyles(theme => ({
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: '1.5em'
  },
  root: {
    marginTop: "0.5em",
    backgroundColor: "#242730",
  },
  grid: {
    marginTop: '0px',
    minHeight: '38vh'
  }
}));

export default function RightPanel(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <ButtonPanel />

      <ButtonPanel />

      <Grid container spacing={2}>

        <Grid className={classes.grid} item xs>
          <SensorStatus socket={socket} />
        </Grid>

        <Grid className={classes.grid} item xs>
          <RobotStatus socket={socket} />
        </Grid>

        <Grid className={classes.grid} item xs>
          <ProcessorStatus socket={socket} />
        </Grid>

      </Grid>
   </div>
  );
}