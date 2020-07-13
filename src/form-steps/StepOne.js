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
}));

function StepOne({ step, next, prev, handleChangeGeneral }) {
  const classes = useStyles();
  return (
    <Card className="form-container">
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
            id="standard-basic"
            label="IBU"
            name="ibu"
            value={step.generalInfo.ibu}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="SRM"
            name="srm"
            value={step.generalInfo.srm}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="ABV"
            name="abv"
            value={step.generalInfo.abv}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Origional Gravity"
            name="origionalGravity"
            value={step.generalInfo.origionalGravity}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Final Gravity"
            name="finalGravity"
            value={step.generalInfo.finalGravity}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Brewing Date"
            name="brewingDate"
            value={step.generalInfo.brewingDate}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Secondary Date"
            name="dateSecondary"
            value={step.generalInfo.dateSecondary}
            onChange={handleChangeGeneral}
          />
          <TextField
            id="standard-basic"
            label="Bottling Date"
            name="dateBottling"
            value={step.generalInfo.dateBottling}
            onChange={handleChangeGeneral}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          disabled
          className="prev"
          onClick={prev}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="next"
          onClick={next}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

export default StepOne;
