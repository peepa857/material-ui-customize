import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [modalIndex, setModal] = React.useState(0);
  const steps = [
    "User info - First",
    "User info - Second",
    "User info - Third"
  ];

  function handleClickOpen() {
    setModal(0);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleNext() {
    if (modalIndex < 2) {
      setModal(modalIndex + 1);
    }
  }

  function handleBefore() {
    if (0 < modalIndex) {
      setModal(modalIndex - 1);
    }
  }

  function handleSubmit() {
    setOpen(false);
  }

  const stepper = (
    <Stepper activeStep={modalIndex} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  const FirstModal = (
    <>
      <DialogTitle id="form-dialog-title">Enter user info - First</DialogTitle>
      {stepper}
      <DialogContent>
        <DialogContentText>
          Please enter your first name and last name.
        </DialogContentText>
        <TextField margin="dense" label="first name" fullWidth />
        <TextField margin="dense" label="last name" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={handleNext} color="primary" variant="contained">
          Next
        </Button>
      </DialogActions>
    </>
  );

  const SecondModal = (
    <>
      <DialogTitle id="form-dialog-title">Enter user info - Second</DialogTitle>
      {stepper}
      <DialogContent>
        <DialogContentText>
          Please enter your username and password.
        </DialogContentText>
        <TextField margin="dense" label="username" fullWidth />
        <TextField margin="dense" label="password" type="password" fullWidth />
        <TextField
          margin="dense"
          label="password confirm"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={handleBefore} variant="contained">
          Before
        </Button>
        <Button onClick={handleNext} color="primary" variant="contained">
          Next
        </Button>
      </DialogActions>
    </>
  );

  const ThirdModal = (
    <>
      <DialogTitle id="form-dialog-title">Enter user info - Third</DialogTitle>
      {stepper}
      <DialogContent>
        <DialogContentText>
          Please enter your telephone number and address.
        </DialogContentText>
        <TextField margin="dense" label="tel." fullWidth />
        <TextField margin="dense" label="address" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={handleBefore} variant="contained">
          Before
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </DialogActions>
    </>
  );

  function showModal(index: number) {
    switch (index) {
      case 1:
        return SecondModal;
      case 2:
        return ThirdModal;
      default:
        return FirstModal;
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Modal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        {showModal(modalIndex)}
      </Dialog>
    </div>
  );
};

export default FormDialog;
