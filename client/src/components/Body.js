import React, { useContext } from "react";
import Entry from "./Entry";
import View from "./View";
import Form from "./Form";
import { BrewContext } from "../context/BrewContext";
import { Grid } from "@material-ui/core";

function Body() {
  const { create, brew, open } = useContext(BrewContext);

  if (create) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Form />
        </Grid>
      </Grid>
    );
  } else if (open) {
    return (
      <Grid container>
        <View />
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={2}>
        {brew.map((b) => (
          <Grid item xs={12} sm={6} key={b._id}>
            <Entry b={b} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Body;
