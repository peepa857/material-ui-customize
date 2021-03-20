import "./styles.css";
import Button from "@material-ui/core/Button";
import React from "react";
import ConfirmDialog from "./ConfirmDialog";
import AlertDialog from "./AlertDialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => setOpenAlertDialog(true)}
      >
        Alert Dialog
      </Button>
      <AlertDialog
        open={openAlertDialog}
        message={"Alert Message Dialog ! Alert Message Dialog !"}
        onCancel={() => setOpenAlertDialog(false)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={() => setOpenConfirmDialog(true)}
      >
        Confirm Dialog
      </Button>
      <ConfirmDialog
        open={openConfirmDialog}
        message={"Confirm Message Dialog ! Confirm Message Dialog !"}
        onCancel={() => setOpenConfirmDialog(false)}
        onSubmit={() => setOpenConfirmDialog(false)}
      />
    </div>
  );
}
