import React, { useState, useContext } from "react";
import { BrewContext } from "../context/BrewContext";
import {
  Button,
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f8f8ff",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    padding: "1rem",
    borderRadius: "10px",
  },
  section: {
    padding: "1rem",
    minHeight: "75px",
  },
  sectionTitle: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
  sectionSubTitle: {
    fontWeight: "bold",
    paddingRight: "1rem",
  },
  list: {
    overflow: "auto",
    maxHeight: "290px",
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

function View() {
  const [prompt, setPrompt] = useState(false);
  const handlePromptShow = () => {
    setPrompt(true);
  };

  const handlePromptClose = () => {
    setPrompt(false);
  };

  const {
    setStep,
    setCreate,
    setEdit,
    selectedBrew,
    open,
    setOpen,
    deleteBrews,
  } = useContext(BrewContext);

  const classes = useStyles();

  const handleEdit = () => {
    setEdit(true);
    setCreate(true);
    const newIngredients =
      selectedBrew.ingredients.length === 0
        ? ["", "", ""]
        : selectedBrew.ingredients.filter(Boolean);
    setStep({ ...selectedBrew, ingredients: newIngredients, stage: 1 });
  };

  const handleDelete = () => {
    // const newBrew = brew.filter((brews) => brews !== b)
    deleteBrews(selectedBrew._id);
    setPrompt(false);
    setOpen(!open);
  };
  const calcABV =
    parseFloat(selectedBrew.generalInfo.originalGravity) < 0.0000001 ||
    parseFloat(selectedBrew.generalInfo.finalGravity) < 0.0000001
      ? "0%"
      : `${Number(
          (
            (parseFloat(selectedBrew.generalInfo.originalGravity) -
              parseFloat(selectedBrew.generalInfo.finalGravity)) *
            131.25
          ).toFixed(2)
        )}%`;

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid container item spacing={1} sm={12} md={6} className="page one">
        <Grid item xs={12}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              General Info
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>Name:</label>
                    <p>{selectedBrew.generalInfo.name}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Batch Size:
                    </label>
                    <p>{selectedBrew.generalInfo.batchSize}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Batch Type:
                    </label>
                    <p>{selectedBrew.generalInfo.batchType}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Batch Number:
                    </label>
                    <p>{selectedBrew.generalInfo.batchNumber}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>IBU:</label>
                    <p>{selectedBrew.generalInfo.ibu}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>ABV:</label>
                    <p>{calcABV}</p>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Original Gravity:
                    </label>
                    <p>{selectedBrew.generalInfo.originalGravity}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Final Gravity:
                    </label>
                    <p>{selectedBrew.generalInfo.finalGravity}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Brewing Date:
                    </label>
                    <p>{selectedBrew.generalInfo.brewingDate}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Second date:
                    </label>
                    <p>{selectedBrew.generalInfo.dateSecondary}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Bottling Date:
                    </label>
                    <p>{selectedBrew.generalInfo.dateBottling}</p>
                  </ListItem>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>SRM:</label>
                    <p>{selectedBrew.generalInfo.srm}</p>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Ingredients
            </Typography>
            <List className={classes.list}>
              {selectedBrew.ingredients.filter(Boolean).map((i, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={i} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Brewing Notes
            </Typography>
            <p>{selectedBrew.brewingNotes}</p>
          </Card>
        </Grid>
      </Grid>
      <Grid container item spacing={1} sm={12} md={6} className="page two">
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Hops Notes
            </Typography>
            <p>{selectedBrew.hopsNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Yeast Notes
            </Typography>
            <p>{selectedBrew.yeastNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Fermentation Notes
            </Typography>
            <p>{selectedBrew.fermentationNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Kegging Notes
            </Typography>
            <p>{selectedBrew.keggingNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Finished Product
            </Typography>
            <ListItem>
              <label className={classes.sectionSubTitle}>Appearance:</label>
              <p>{selectedBrew.tastingNotes.appearance}</p>
            </ListItem>
            <ListItem>
              <label className={classes.sectionSubTitle}>Aroma:</label>
              <p>{selectedBrew.tastingNotes.aroma}</p>
            </ListItem>
            <ListItem>
              <label className={classes.sectionSubTitle}>Flavor:</label>
              <p>{selectedBrew.tastingNotes.flavor}</p>
            </ListItem>
            <ListItem>
              <label className={classes.sectionSubTitle}>Bitterness:</label>
              <p>{selectedBrew.tastingNotes.bitterness}</p>
            </ListItem>
            <ListItem>
              <label className={classes.sectionSubTitle}>
                Consumer Rating:
              </label>
              <p>{selectedBrew.tastingNotes.consumerRating}</p>
            </ListItem>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.section}>
            <Typography variant="h5" className={classes.sectionTitle}>
              Additional Notes
            </Typography>
            <p>{selectedBrew.additionalNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.buttonCenter}>
          <Button
            variant="contained"
            className={classes.buttonYellow}
            onClick={() => setOpen(!open)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonGreen}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonRed}
            onClick={handlePromptShow}
          >
            Delete
          </Button>
          <Dialog open={prompt} onClose={handlePromptClose}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`Are you sure you want to delete
              ${selectedBrew.generalInfo.name}?`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlePromptClose}>No</Button>
              <Button color="primary" onClick={handleDelete}>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default View;
