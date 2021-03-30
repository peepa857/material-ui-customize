import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Draggable from "react-draggable";

export type VerDialogProps = {
  open: boolean;
  version: string;
  text: string;
  date: string;
  onCancel: () => void;
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

const VerDialog: FC<VerDialogProps> = ({
  open,
  version,
  text,
  date,
  onCancel
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {"Ver " + version}
        </DialogTitle>
        <DialogContent>{date}</DialogContent>
        <DialogContent>{text}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onCancel} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VerDialog;
