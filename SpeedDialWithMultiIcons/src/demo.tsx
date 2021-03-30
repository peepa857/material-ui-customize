import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import BuildIcon from "@material-ui/icons/Build";
import TimelineIcon from "@material-ui/icons/Timeline";
import Backdrop from "@material-ui/core/Backdrop";
import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380,
      transform: "translateZ(0px)",
      flexGrow: 1
    },
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

const actions = [
  {
    icon: <BuildIcon />,
    name: "EditBasicInfo",
    onClick: () => alert("Open basic info edit modal")
  },
  {
    icon: <DescriptionIcon />,
    name: "EditDetailInfo",
    onClick: () => alert("Open detail info edit modal")
  },
  {
    icon: <TrackChangesIcon />,
    name: "EditTargetInfo",
    onClick: () => alert("Open target modules edit modal")
  },
  {
    icon: <TimelineIcon />,
    name: "EditResultInfo",
    onClick: () => alert("Open result edit modal")
  }
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipOpen
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
