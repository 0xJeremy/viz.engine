import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white'
  },
  value: {
  	paddingRight: '20px',
    color: 'white'
  },
}));

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('Device Name', 'Raspberry Pi'),
  createData('IPv4 Address', '127.0.0.1'),
  createData('IPv6 Address', '127.0.0.1'),
];

export default function PiStatus(props) {
	const classes = useStyles();
  const socket = props.socket;
	return (
		<Table>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row" className={classes.root}>
              {row.name}
            </TableCell>
            <TableCell className={classes.value} align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}