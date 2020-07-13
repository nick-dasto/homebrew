import React, { useContext } from "react";
import { BrewContext } from "../context/BrewContext";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

function Entry({ b }) {
  const { selectedBrew, setSelectedBrew, open, setOpen } = useContext(
    BrewContext
  );

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h3">{b.generalInfo.name}</Typography>
        <Typography variant="body1">{b.generalInfo.brewingDate}</Typography>
      </CardContent>
      <CardActions className="button-container">
        <Button
          variant="contained"
          color="primary"
          className="view"
          onClick={() => {
            setOpen(!open);
            setSelectedBrew(b);
            console.log(selectedBrew);
            console.log(open);
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export default Entry;
