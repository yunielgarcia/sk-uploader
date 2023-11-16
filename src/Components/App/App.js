import React, {useState} from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Button, Paper} from '@material-ui/core';
import BasicModal from "../Modal/modal";
function App() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Sk Uploader
        </Typography>
        <Button onClick={handleOpen} variant="contained" color="primary">
          Open form
        </Button>
        <BasicModal open={open} handleClose={handleClose}/>
      </Paper>
    </Container>
  );
}
export default App;
