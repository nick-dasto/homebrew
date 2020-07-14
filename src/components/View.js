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
  const {
    brew,
    setBrew,
    setStep,
    setCreate,
    setEdit,
    setIndex,
    selectedBrew,
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
                    <p>{selectedBrew.generalInfo.abv}</p>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <label className={classes.sectionSubTitle}>
                      Original Gravity:
                    </label>
                    <p>{selectedBrew.generalInfo.origionalGravity}</p>
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
              {selectedBrew.ingredients
                .trim()
                .split(",")
                .map((i) => (
                  <ListItem>
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
              Tasting Notes
            </Typography>
            <ListItem>
              <label className={classes.sectionSubTitle}>Appearance:</label>
              <p>{selectedBrew.tastingNotes.appreance}</p>
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
            color="abs"
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
