import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles((theme) => ({
  partsLine: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

export type AlertDialogProps = {
  open: boolean;
  message: string;
  onCancel(): void;
};

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const AlertDialog: FC<AlertDialogProps> = ({ open, message, onCancel }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        ></DialogTitle>
        <DialogContent>
          <div className={classes.partsLine}>
            <WarningIcon
              className={classes.icon}
              color="secondary"
              fontSize="large"
            />
            <DialogContentText>{message}</DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
