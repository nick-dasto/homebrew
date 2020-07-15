import React, { useContext } from "react";
import { BrewContext } from "../context/BrewContext";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f8f8ff",
  },
  buttonCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Entry({ b }) {
  const { setSelectedBrew, open, setOpen } = useContext(BrewContext);
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h4">{b.generalInfo.name}</Typography>
        <Typography variant="body1">{b.generalInfo.brewingDate}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          className="view"
          onClick={() => {
            setOpen(!open);
            setSelectedBrew(b);
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default Entry;
