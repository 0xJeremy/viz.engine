import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  logs: {
    border: '1px #4fbbd6 solid',
    borderWidth: '0px 0px 0px 4px',
    paddingLeft: '8px',
    backgroundColor: "black",
    color: 'white',
    minHeight: '28vh',
    maxHeight: '28vh'
  }
});

export default function LogOutput(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Output Logs
          </Typography>
        </CardContent>

        <Typography className={classes.logs}>
          > |2020-04-01T16:24:25.589Z| [DBG] Log testing [[stdin]:1]<br />
          > |2020-04-01T16:24:41.601Z| [WRN] viz.engine framework testing text [[stdin]:1]<br />
          > |2020-04-01T16:24:54.272Z| [ERR] Error stack trace beginning [[stdin]:1]<br />
          > |2020-04-01T16:25:05.388Z| [DBG] Continued debugging text [[stdin]:1]<br />
          > |2020-04-01T16:24:25.589Z| [DBG] Log testing [[stdin]:1]<br />
          > |2020-04-01T16:24:41.601Z| [WRN] viz.engine framework testing text [[stdin]:1]<br />
          > |2020-04-01T16:24:54.272Z| [ERR] Error stack trace beginning [[stdin]:1]<br />
          > |2020-04-01T16:25:05.388Z| [DBG] Continued debugging text [[stdin]:1]<br />
        </Typography>

      </Card>
    </div>
  );
}
