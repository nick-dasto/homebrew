import React from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttonCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonYellow: {
    margin: "0rem .5rem",
  },
  buttonGreen: {
    margin: "0rem .5rem",
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.light,
    },
  },
  buttonRed: {
    margin: "0rem .5rem",
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.light,
    },
  },
}));

function StepOne({ step, next, prev, handleChangeGeneral, returnABV }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <h1>General Info</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name"
            name="name"
            value={step.generalInfo.name}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Batch Size"
            name="batchSize"
            value={step.generalInfo.batchSize}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Batch Type"
            name="batchType"
            value={step.generalInfo.batchType}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Batch Number"
            name="batchNumber"
            value={step.generalInfo.batchNumber}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-uncontrolled"
            label="Original Gravity"
            name="originalGravity"
            error={
              step.generalInfo.originalGravity.match(/^[+-]?\d+(\.\d+)?$/)
                ? false
                : true
            }
            helperText="Input must be a number or decimal"
            value={step.generalInfo.originalGravity}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-uncontrolled"
            label="Final Gravity"
            helperText="Input must be a number or decimal"
            name="finalGravity"
            error={
              step.generalInfo.finalGravity.match(/^[+-]?\d+(\.\d+)?$/)
                ? false
                : true
            }
            value={step.generalInfo.finalGravity}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="IBU"
            helperText="International Bittering Units"
            name="ibu"
            value={step.generalInfo.ibu}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="SRM"
            helperText="Standard Reference Method"
            name="srm"
            value={step.generalInfo.srm}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-read-only-input"
            label="ABV"
            helperText="Alcohol By Volume"
            name="abv"
            value={returnABV()}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="date"
            label="Brewing Date"
            type="date"
            name="brewingDate"
            value={step.generalInfo.brewingDate}
            onChange={handleChangeGeneral}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Secondary Date"
            type="date"
            name="dateSecondary"
            value={step.generalInfo.dateSecondary}
            onChange={handleChangeGeneral}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Bottling Date"
            type="date"
            name="dateBottling"
            value={step.generalInfo.dateBottling}
            onChange={handleChangeGeneral}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </CardContent>
      <CardActions className={classes.buttonCenter}>
        <Button
          variant="contained"
          disabled
          className={classes.buttonYellow}
          onClick={prev}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonGreen}
          onClick={next}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

export default StepOne;
