import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
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
    }
    props.socket.on('state', data => this.setState({
      cpu: data.cpu,
      ram: data.ram,
      networkUp: data.netUp,
      networkDown: data.netDown,
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
        </TableBody>
      </Table>
    );
  }
}

export default StateTable;
