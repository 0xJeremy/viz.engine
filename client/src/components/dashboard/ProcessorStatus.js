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
      cpu: 50,
      ram: 128,
      networkUp: 128,
      networkDown: 128,
      temp: 25
    }
    props.socket.on('state', data => this.setState({
      cpu: data.cpu,
      ram: data.ram,
      networkUp: data.netUp,
      networkDown: data.netDown,
      temp: data.temp
    }));
  }

  render() {
    return (
      <Table>
        <TableBody>

          <TableRow>
            <GetRow name={'CPU Usage'} val={this.state.cpu} unit={'%'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'RAM Usage'} val={this.state.ram} unit={'mb'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Network Upload'} val={this.state.networkUp} unit={'mb'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Network Download'} val={this.state.networkDown} unit={'mb'}/>
          </TableRow>

          <TableRow>
            <GetRow name={'Temperature'} val={this.state.temp} unit={'°C'}/>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default function ProcessorStatus(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Processor Status
          </Typography>
          <StateTable socket={socket}/>
        </CardContent>
      </Card>

   </div>
  );
}
