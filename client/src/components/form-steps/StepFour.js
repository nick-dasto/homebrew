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

function StepFour({ step, prev, handleChange, handleSubmit }) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <h1>Notes</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Brewing Notes"
            multiline
            name="brewingNotes"
            value={step.brewingNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Hops Notes"
            multiline
            name="hopsNotes"
            value={step.hopsNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Yeast Notes"
            multiline
            name="yeastNotes"
            value={step.yeastNotes}
            onChange={handleChange}
          />

          <TextField
            id="standard-basic"
            label="Fermentation Notes"
            multiline
            name="fermentationNotes"
            value={step.fermentationNotes}
            onChange={handleChange}
          />

          <TextField
            id="standard-basic"
            label="Kegging Notes"
            multiline
            name="keggingNotes"
            value={step.keggingNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Additional Notes"
            multiline
            name="additionalNotes"
            value={step.additionalNotes}
            onChange={handleChange}
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
          onClick={handleSubmit}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}

export default StepFour;
