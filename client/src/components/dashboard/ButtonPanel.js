import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#242730",
    paddingTop: '16px',
    paddingBottom: '16px',
    marginBottom: '16px'
  },
  button: {
    color: '#4fbbd6',
  },
  outline: {
    borderColor: '#4fbbd6',
    height: '100%'
  },
  grid: {
    textAlign: 'center',
  }
});


export default function ButtonPanel(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <Card className={classes.root}>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">

          <Grid className={classes.grid} item xs>
            <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Launch Program</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Enable Camera</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Reset Program</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Emergency Stop</Button>
          </Grid>

        </Grid>      
      </Card>
    </div>
  );
}
