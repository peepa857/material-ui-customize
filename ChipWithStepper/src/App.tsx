import "./styles.css";
import * as React from "react";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import { StepIconProps } from "@material-ui/core/StepIcon";

const useStyles = makeStyles({
  table: {
    minWidth: 600
  },
  hideLastBorder: {
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    minWidth: 360,
    fontSize: theme.typography.pxToRem(14),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
          <div className={classes.circle} />
        )}
    </div>
  );
}

const steps = [
  {
    label: "TODO",
    value: 10
  },
  {
    label: "DOING",
    value: 20
  },
  {
    label: "REVIEW",
    value: 30
  },
  {
    label: "DONE",
    value: 40
  }
];

function createData(id: string, name: string, point: number, status: number) {
  return { id, name, point, status };
}

const rows = [
  createData("A-001", "task1", 3, 10),
  createData("A-002", "task2", 7, 20),
  createData("A-003", "task3", 11, 30),
  createData("A-004", "task4", 13, 40),
  createData("A-005", "task5", 17, 10)
];

function active(status: number) {
  switch (status) {
    case 10:
      return 0;
    case 20:
      return 1;
    case 30:
      return 2;
    case 40:
      return 3;
  }
}

const StatusChipStepper = (status: number) => {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Stepper
              alternativeLabel
              activeStep={active(status)}
              connector={<QontoConnector />}
            >
              {steps.map((step) => (
                <Step key={step.value}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </React.Fragment>
        }
      >
        <Chip
          color="primary"
          clickable
          label={steps.find((s) => s.value === status)?.label}
        />
      </HtmlTooltip>
    </div>
  );
};

export default function App() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">No</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Point</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.hideLastBorder}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.point}</TableCell>
              <TableCell align="left">
                {StatusChipStepper(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
