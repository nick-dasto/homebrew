import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { BrewProvider } from "./context/BrewContext";
import { Grid } from "@material-ui/core";

function App() {
  // animation

  return (
    <BrewProvider>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Body />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </BrewProvider>
  );
}

export default App;
