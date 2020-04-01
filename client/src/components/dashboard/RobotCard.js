import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import StateTable from './StateTable.js';
import PiStatus from './PiStatus.js';
import ConnectionInput from './ConnectionInput.js';

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

export default function RobotCard(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      {/*<ConnectionInput socket={socket} />*/}

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Robot Status
          </Typography>
          <StateTable socket={socket}/>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Raspberry Pi Info
          </Typography>
          <PiStatus socket={socket}/>
        </CardContent>
      </Card>

   </div>
  );
}