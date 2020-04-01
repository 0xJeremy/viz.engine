import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToolBar from './ToolBar';
import MainContents from './MainContent';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#29323c',
    position: 'fixed'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#09101d'
  },
}));

function Page() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0); // Use 'false' to start without a tab selected

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar className={clsx(classes.appBar)}>
        <ToolBar value={value} handleChange={handleChange}/>
      </AppBar>

      <main className={clsx(classes.content)}>
        <MainContents value={value}/>
      </main>

    </div>
  );
}

export default Page;
