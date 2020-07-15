import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { BrewProvider } from "./context/BrewContext";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/images/beer.jpg) center no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  // animation
  const classes = useStyles();

  return (
    <BrewProvider>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item className={classes.container} xs={12} sm={8}>
            <Body />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </BrewProvider>
  );
}

export default App;
