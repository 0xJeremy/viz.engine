import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridItem from "../packs/GridItem.js";
import LogOutput from "./LogOutput";
import Terminal from "./Terminal";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  body: {
    paddingTop: '0',
    paddingBottom: '0'
  },
  grid: {
    marginTop: '8px'
  }
}));

export default function Interactions() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={2}>

        <GridItem xs={8} md={6}>
          <LogOutput />
        </GridItem>

        <GridItem xs={8} md={6}>
          <Terminal />
        </GridItem>

      </Grid>
    </div>
  );
}