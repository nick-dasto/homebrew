import React, { useEffect, useContext } from "react";
import Entry from "./Entry";
import View from "./View";
import Form from "./Form";
import { BrewContext } from "../context/BrewContext";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container:{
    margin: '1rem 2rem',
    maxWidth: '1150px'
  }
}))

function Brews({ dark }) {
    const classes = useStyles();
    const { create, brew, open, checkLoggedIn, update } = useContext(BrewContext);

    useEffect(() => {
      checkLoggedIn();
      // eslint-disable-next-line
    },[update])
  
    if (create) {
      return (
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      );
    } else if (open) {
      return (
        <Grid container className={classes.container}>
          <View dark={dark} />
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={2} className={classes.container}>
          {brew.map((b) => (
            <Grid item xs={12} sm={6} key={b._id}>
              <Entry b={b} />
            </Grid>
          ))}
        </Grid>
      );
    }  
}

export default Brews
