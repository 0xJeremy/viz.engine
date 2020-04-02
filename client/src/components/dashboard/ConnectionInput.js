import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#4fbbd6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#4fbbd6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4fbbd6',
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    backgroundColor: "#242730",
  },
  title: {
    
    fontSize: '1em',
    color: "#4fbbd6",
  },
  button: {
    color: '#4fbbd6',
  },
  outline: {
    borderColor: '#4fbbd6',
    height: '100%'
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
    marginLeft: '16px',
  }
});


export default function ConnectionInput(props) {
  const classes = useStyles();
  const socket = props.socket;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} >
            Remote Connection:
            <InputField className={classes.input} label="IPv4 Address" variant="outlined" margin='dense'/>
            <InputField className={classes.input} label="Port" variant="outlined" margin='dense'/>
            <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Connect</Button>

          </Typography>
        </CardContent>


      </Card>
    </div>
  );
}
