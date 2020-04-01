import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  input: {
    color: "#4fbbd6",
  }
});

export default function ConnectionInput(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Remote Connection
          </Typography>
          <TextField className={classes.content} classes={{label: classes.input, root: classes.content}} label="Robot IPv4 Address" variant="outlined" />
          <TextField className={classes.content} classes={{label: classes.input, root: classes.content}} label="Port" variant="outlined" />
        </CardContent>
      </Card>
    </div>
  );
}
