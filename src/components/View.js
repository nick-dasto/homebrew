import React, { useContext } from "react";
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
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.warning.light,
    padding: "1rem",
    borderRadius: "10px",
  },
}));

function View() {
  const {
    brew,
    setBrew,
    setStep,
    setCreate,
    setEdit,
    setIndex,
    selectedBrew,
    setSelectedBrew,
    open,
    setOpen,
  } = useContext(BrewContext);

  const classes = useStyles();

  const handleEdit = () => {
    setEdit(true);
    setIndex(brew.indexOf(selectedBrew));
    setCreate(true);
    setStep(selectedBrew);
  };

  const handleDelete = () => {
    // const newBrew = brew.filter((brews) => brews !== b)
    setBrew(brew.filter((brews) => brews !== selectedBrew));
    setOpen(!open);
  };

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid container item spacing={1} sm={12} md={6} className="page one">
        <Grid item xs={12}>
          <Card className="general-info">
            <Typography variant="h4">General Info</Typography>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <List className="general-info-col-one">
                  <ListItem className="label-and-input">
                    <label>Name:</label>
                    <p>{selectedBrew.generalInfo.name}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Batch Size:</label>
                    <p>{selectedBrew.generalInfo.batchSize}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Batch Type:</label>
                    <p>{selectedBrew.generalInfo.batchType}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Batch Number:</label>
                    <p>{selectedBrew.generalInfo.batchNumber}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>IBU:</label>
                    <p>{selectedBrew.generalInfo.ibu}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>ABV:</label>
                    <p>{selectedBrew.generalInfo.abv}</p>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List className="general-info-col-two">
                  <ListItem className="label-and-input">
                    <label>Original Gravity:</label>
                    <p>{selectedBrew.generalInfo.origionalGravity}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Final Gravity:</label>
                    <p>{selectedBrew.generalInfo.finalGravity}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Brewing Date:</label>
                    <p>{selectedBrew.generalInfo.brewingDate}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Second date:</label>
                    <p>{selectedBrew.generalInfo.dateSecondary}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>Bottling Date:</label>
                    <p>{selectedBrew.generalInfo.dateBottling}</p>
                  </ListItem>
                  <ListItem className="label-and-input">
                    <label>SRM:</label>
                    <p>{selectedBrew.generalInfo.srm}</p>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="ingredients">
            <Typography variant="h4">Ingredients</Typography>
            <List>
              {selectedBrew.ingredients.split(",").map((i) => (
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary={i} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="brewing-notes">
            <Typography variant="h4">Brewing Notes</Typography>
            <p>{selectedBrew.brewingNotes}</p>
          </Card>
        </Grid>
      </Grid>
      <Grid container item spacing={1} sm={12} md={6} className="page two">
        <Grid item xs={12} sm={6}>
          <Card className="hop-notes">
            <Typography variant="h4">Hops Notes</Typography>
            <p>{selectedBrew.hopsNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="yeast-notes">
            <Typography variant="h4">Yeast Notes</Typography>
            <p>{selectedBrew.yeastNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="fermentation-notes">
            <Typography variant="h4">Fermentation Notes</Typography>
            <p>{selectedBrew.fermentationNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="kegging">
            <Typography variant="h4">Kegging Notes</Typography>
            <p>{selectedBrew.keggingNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="tasting-notes">
            <Typography variant="h4">Tasting Notes</Typography>
            <Grid item className="label-and-input">
              <label>Appearance:</label>
              <p>{selectedBrew.tastingNotes.appreance}</p>
            </Grid>
            <Grid item className="label-and-input">
              <label>Aroma:</label>
              <p>{selectedBrew.tastingNotes.aroma}</p>
            </Grid>
            <Grid item className="label-and-input">
              <label>Flavor:</label>
              <p>{selectedBrew.tastingNotes.flavor}</p>
            </Grid>
            <Grid item className="label-and-input">
              <label>Bitterness:</label>
              <p>{selectedBrew.tastingNotes.bitterness}</p>
            </Grid>
            <Grid item className="label-and-input">
              <label>Consumer Rating:</label>
              <p>{selectedBrew.tastingNotes.consumerRating}</p>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="additional-notes">
            <Typography variant="h4">Additional Notes</Typography>
            <p>{selectedBrew.additionalNotes}</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className="close"
            onClick={() => setOpen(!open)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="edit"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="delete"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default View;
