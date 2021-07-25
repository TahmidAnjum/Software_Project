import React from 'react';
//import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const App= ()=> {
    const classes = useStyles();
  return (
      <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
    </div>
  );
}

export default App;