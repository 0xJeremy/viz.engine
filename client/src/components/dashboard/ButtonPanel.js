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
  blue: {
    color: '#4fbbd6',
  },
  orange: {
    color: '#D55D0E'
  },
  green: {
    color: '#48c74e'
  },
  red: {
    color: '#e03131'
  },
  outline_blue: {
    borderColor: '#4fbbd6',
    height: '100%'
  },
  outline_orange: {
    borderColor: '#D55D0E',
    height: '100%'
  },
  outline_green: {
    borderColor: '#48c74e',
    height: '100%'
  },
  outline_red: {
    borderColor: '#e03131',
    height: '100%'
  },
  grid: {
    textAlign: 'center',
  },
});


export default function ButtonPanel(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <Card className={classes.root}>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">

          <Grid className={classes.grid} item xs>
            <Button className={classes.blue} classes={{outlined: classes.outline_blue}} variant="outlined">Launch Program</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.green} classes={{outlined: classes.outline_green}} variant="outlined">Enable Camera</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.orange} classes={{outlined: classes.outline_orange}} variant="outlined">Reset Program</Button>
          </Grid>

          <Grid className={classes.grid} item xs>
            <Button className={classes.red} classes={{outlined: classes.outline_red}} variant="outlined">Emergency Stop</Button>
          </Grid>

        </Grid>      
      </Card>
    </div>
  );
}
