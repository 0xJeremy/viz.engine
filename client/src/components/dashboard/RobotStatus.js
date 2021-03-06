import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#242730",
  },
  title: {
    fontSize: '1em',
    color: "#4fbbd6"
  },
  value: {
    paddingRight: '5px',
    color: 'white'
  },
  units: {
    paddingLeft: '0px',
    color: 'white'
  },
  name: {
    color: 'white'
  },
}));

function GetRow(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableCell className={classes.name} component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell className={classes.value} align="right">{props.val}</TableCell>
      <TableCell className={classes.units} align="right">{props.unit}</TableCell>
    </React.Fragment>
  )
}

class StateTable extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Mr. Roboto",
      time: "0:00:00.00",
      runtime: "0:00:00.00",
      battery: 99
    }
    props.socket.on('state', data => this.setState({
      name: data.name,
      time: data.time,
      runtime: data.runtime,
      battery: data.battery
    }));
  }

  render() {
    return (
      <Table>
        <TableBody>

          <TableRow>
            <GetRow name={'Robot Name'} val={this.state.name}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Robot Time'} val={this.state.time}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Program Runtime'} val={this.state.runtime}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Battery Level'} val={this.state.battery}/>
          </TableRow>

        </TableBody>
      </Table>
    );
  }
}

export default function RobotStatus(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Robot Status
          </Typography>
          <StateTable socket={socket}/>
        </CardContent>
      </Card>

   </div>
  );
}
