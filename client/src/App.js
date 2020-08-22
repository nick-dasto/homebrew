import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { BrewProvider } from "./context/BrewContext";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';


function App() {
  const [primary, setPrimary] = useState(grey)
  const [secondary, setSecondary] = useState(blue)
  const [dark, setDark] = useState(false)

  const themeCustom= createMuiTheme({
    palette:{
      primary: primary,
      secondary: secondary,
      type: dark ? 'dark': 'light'
    }
  })
  const useStyles = makeStyles((theme) => ({
    paper:{
      minHeight: '100vh',
      height:'100%',
      backgroundColor: dark ? themeCustom.palette.background.default:'#e3e3e3',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
  }))
  const classes = useStyles();

  return (
    <Router>
      <BrewProvider>
        <ThemeProvider theme={themeCustom}>
        <Paper className={classes.paper}>
              <Nav dark={dark} setDark={setDark} primary={primary} setPrimary={setPrimary} secondary={secondary} setSecondary={setSecondary} />
                  <Body />
            </Paper>
        </ThemeProvider>
      </BrewProvider>
    </Router>
    );
}

export default App;
