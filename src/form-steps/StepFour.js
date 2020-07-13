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

function StepFour({
  step,
  prev,
  handleChange,
  handleChangeIngredients,
  handleSubmit,
}) {
  const classes = useStyles();
  return (
    <Card className="form-container">
      <CardContent>
        <h1>Notes</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Ingerdients"
            helperText="Seperate each item with a comma"
            multiline
            name="ingredients"
            value={step.ingredients}
            onChange={handleChangeIngredients}
          />
          <TextField
            id="standard-basic"
            label="Brewing Notes"
            name="brewingNotes"
            value={step.brewingNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Hops Notes"
            name="hopsNotes"
            value={step.hopsNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Yeast Notes"
            name="yeastNotes"
            value={step.yeastNotes}
            onChange={handleChange}
          />

          <TextField
            id="standard-basic"
            label="Fermentation Notes"
            name="fermentationNotes"
            value={step.fermentationNotes}
            onChange={handleChange}
          />

          <TextField
            id="standard-basic"
            label="Kegging Notes"
            name="keggingNotes"
            value={step.keggingNotes}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Additional Notes"
            name="additionalNotes"
            value={step.additionalNotes}
            onChange={handleChange}
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
          className="save"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}

export default StepFour;
