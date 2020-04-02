import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const StyledTabs = withStyles({
  indicator: {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 50,
      width: '100%',
      backgroundColor: '#ffffff',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />)

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <LinkTab disableRipple {...props} />);

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#4fbbd6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4fbbd6',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4fbbd6',
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

const useStyles = makeStyles(theme => ({
	name: {
		marginLeft: '-10px',
		fontSize: '2.2em',
		fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif'
	},
  title: {
    flexGrow: 1,
    borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: '0 0 0 2px',
		marginLeft: '64px',
  },
  hide: {
    display: 'none',
  },
  icon: {
    color: '#999999'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '16px',
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
    marginLeft: '8px',
  }
}));

function ToolBar(props) {
	const classes = useStyles()
	const value = props.value;
	const handleChange = props.handleChange;

	return (
		<Toolbar>
			<Typography className={classes.name}>viz.engine</Typography>

      <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs" className={classes.title}>
        <StyledTab label="Dashboard" href="/Dashboard" {...a11yProps(0)} />
        <StyledTab label="Status Monitor" href="/status" {...a11yProps(1)} />
      </StyledTabs>

      <InputField className={classes.input} label="IPv4 Address" variant="outlined" margin='dense'/>
      <InputField className={classes.input} label="Port" variant="outlined" margin='dense'/>
      <Button className={classes.button} classes={{outlined: classes.outline}} variant="outlined">Connect</Button>
    
    </Toolbar>
	)
}

export default ToolBar
