import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import RobotStatus from './RobotStatus';
import ConnectionInput from './ConnectionInput';
import ProcessorStatus from './ProcessorStatus'

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
  title: {
    fontSize: '1em',
    color: "#4fbbd6"
  },
}));

export default function RightPanel(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      {/*<ConnectionInput socket={socket} />*/}

      <RobotStatus socket={socket} />

      <ProcessorStatus socket={socket} />

   </div>
  );
}