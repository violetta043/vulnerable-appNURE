import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Modal.css'; 

export default function AlertDialog({ open, handleClose, handleDelete }) {

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are u sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          sx={{ backgroundColor: '#D8D5D5', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
           onClick={handleClose}>Cancel</Button>
          <Button 
          sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
          className='modal-delete-btn' onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}
