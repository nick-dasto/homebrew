import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { BrewContext } from "../context/BrewContext";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  header: {
    flexGrow: 1,
  },
  pad: {
    paddingRight: "1rem",
  },
}));

function Nav() {
  const { create, setCreate } = useContext(BrewContext);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" className={classes.header}>
          <FontAwesomeIcon icon={faBeer} className={classes.pad} />
          Tom's Home Brew
        </Typography>
        <Button
          variant="contained"
          size="large"
          className={create ? "add-new rotate" : "add-new"}
          startIcon={!create ? <AddIcon /> : <CloseIcon />}
          onClick={() => setCreate(!create)}
        >
          {!create ? "Add" : "Close"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
