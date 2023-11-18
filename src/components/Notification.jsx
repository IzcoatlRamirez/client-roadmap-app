import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { pink } from '@mui/material/colors';

function Notification({ open, handleClose, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        sx={{backgroundColor:pink['A400']}}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Notification;