import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LogOutput from "./LogOutput";
import Terminal from "./Terminal";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: '8px'
  }
}));

export default function Interactions() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={2}>

        <Grid item xs>
          <LogOutput />
        </Grid>

        <Grid item xs>
          <Terminal />
        </Grid>

      </Grid>
    </div>
  );
}
