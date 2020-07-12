import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import "./App.css";
import { BrewProvider } from "./context/BrewContext";

function App() {
  // Design the cards - animate everything with CCSTransition
  // Incorperate a blue accent theme?

  //github pages

  return (
    <BrewProvider>
      <Nav />
      <Body />
    </BrewProvider>
  );
}

export default App;
