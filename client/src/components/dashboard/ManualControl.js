import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "../packs/Button.js"

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  body: {
    paddingTop: '0',
    paddingBottom: '0'
  }
}));

export default function ManualControl() {
  const classes = useStyles();

  function Row1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="success" className={classes.button} fullWidth>
            <ExpandLess />
          </Button>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </React.Fragment>
    );
  }

  function Row2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Button variant="contained" color="success" className={classes.button} fullWidth>
            <ChevronLeft />
          </Button>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="success" className={classes.button} fullWidth>
            <ChevronRight />
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  function Row3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="success" className={classes.button} fullWidth>
            <ExpandMore />
          </Button>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Grid container spacing={0} justify="center">
      <Grid container item xs={12} spacing={2}>
        <Row1 />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Row2 />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Row3 />
      </Grid>
      </Grid>
  );
}