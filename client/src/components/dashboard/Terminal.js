import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactTerminal from 'react-terminal-component';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#242730",
  },
  title: {
    fontSize: '1em',
    color: "#4fbbd6"
  },
  content: {
    color: "#4fbbd6",
  },
  logs: {
    border: '1px #4fbbd6 solid',
    borderWidth: '0px 0px 0px 4px',
    paddingLeft: '8px',
    backgroundColor: "black",
    color: 'white',
    minHeight: '15em'
  }
});

export default function Terminal(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary">
            Command Console
          </Typography>
        </CardContent>
        <ReactTerminal theme={{
          background: 'black',
          promptSymbolColor: '#4fbbd6',
          commandColor: '#fcfcfc',
          outputColor: '#fcfcfc',
          errorOutputColor: 'red',
          fontSize: '1.1rem',
          spacing: '1%',
          fontFamily: 'monospace',
          width: '100%',
          height: '17em'
        }}/>
      </Card>
    </div>
  );
}