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

function StepTwo({ step, setStep, next, prev, handleChangeIngredients }) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <h1>Ingredients</h1>
        <form className={classes.root} noValidate autoComplete="off">
          {step.ingredients.map((i, index) => (
            <TextField
              key={index}
              id="standard-basic"
              name="ingredients"
              value={i}
              onChange={(e) => handleChangeIngredients(e, index)}
              onFocus={() => {
                if (index === step.ingredients.length - 1) {
                  setStep((state) => ({
                    ...state,
                    ingredients: [...state.ingredients, ""],
                  }));
                }
              }}
            />
          ))}
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

export default StepTwo;
