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
  }
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
      lidar1: NaN,
      lidar2: NaN,
      servo1: NaN,
      servo2: NaN,
      servo3: NaN
    }
    props.socket.on('state', data => this.setState({
      lidar1: data.lidar1,
      lidar2: data.lidar2,
      servo1: data.servo1,
      servo2: data.servo2,
      servo3: data.servo3
    }));
  }

  render() {
    return (
      <Table>
        <TableBody>

          <TableRow>
            <GetRow name={'Front Lidar'} val={this.state.lidar1} unit={'cm'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Back Lidar'} val={this.state.lidar2} unit={'cm'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Servo 1'} val={this.state.servo1}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Servo 2'} val={this.state.servo2}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Servo 3'} val={this.state.servo3}/>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default function SensorStatus(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Sensor Status
          </Typography>
          <StateTable socket={socket}/>
        </CardContent>
      </Card>

   </div>
  );
}
