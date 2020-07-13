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

function StepThree({ step, next, prev, handleChangeTasting }) {
  const classes = useStyles();
  return (
    <Card className="form-container">
      <CardContent>
        <h1>Tasting</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Appearance"
            name="appreance"
            value={step.tastingNotes.appreance}
            onChange={handleChangeTasting}
          />
          <TextField
            id="standard-basic"
            label="Aroma"
            name="aroma"
            value={step.tastingNotes.aroma}
            onChange={handleChangeTasting}
          />
          <TextField
            id="standard-basic"
            label="Flavor"
            name="flavor"
            value={step.tastingNotes.flavor}
            onChange={handleChangeTasting}
          />
          <TextField
            id="standard-basic"
            label="Bitterness"
            name="bitterness"
            value={step.tastingNotes.bitterness}
            onChange={handleChangeTasting}
          />
          <TextField
            id="standard-basic"
            label="Consumer Rating"
            name="consumerRating"
            value={step.tastingNotes.consumerRating}
            onChange={handleChangeTasting}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
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

export default StepThree;
