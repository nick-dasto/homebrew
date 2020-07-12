import React, { useState, useEffect } from "react";
import info from "./config";
import Nav from "./Nav.js";
import Entry from "./Entry.js";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [brew, setBrew] = useState(info);
  const [create, setCreate] = useState(false);

  // Design the cards - animate everything with CCSTransition

  // Code Edit button => IMPORTANT - globalContext is a must with edit

  // Incorperate a blue accent theme?

  useEffect(() => {
    setBrew(info);
  }, []);

  return (
    <>
      <Nav create={create} setCreate={setCreate} />

      {create ? (
        <Form
          brew={brew}
          setBrew={setBrew}
          create={create}
          setCreate={setCreate}
        />
      ) : (
        <div className="entry-container">
          {brew.map((b) => (
            <Entry key={b.generalInfo.name} b={b} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
