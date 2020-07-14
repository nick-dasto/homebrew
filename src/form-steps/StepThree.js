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
  container: {
    backgroundColor: "#f8f8ff",
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

function StepThree({ step, next, prev, handleChangeTasting }) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <h1>Tasting</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Appearance"
            name="appearance"
            value={step.tastingNotes.appearance}
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
            id="standard-uncontrolled"
            label="Consumer Rating"
            helperText="What do people think of it?"
            name="consumerRating"
            value={step.tastingNotes.consumerRating}
            onChange={handleChangeTasting}
          />
        </form>
      </CardContent>
      <CardActions className={classes.buttonCenter}>
        <Button
          variant="contained"
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

export default StepThree;
