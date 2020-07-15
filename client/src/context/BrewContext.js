import React, { useState, useEffect, createContext } from "react";
import { formData } from "../config";
import axios from "axios";

export const BrewContext = createContext();

export const BrewProvider = (props) => {
  const [brew, setBrew] = useState([]);
  const [create, setCreate] = useState(false);
  const [step, setStep] = useState(formData);
  const [edit, setEdit] = useState(false);
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [open, setOpen] = useState(false);

  //Actions
  async function getBrews() {
    try {
      const res = await axios.get("/api/v1/brews");
      setBrew(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteBrews(id) {
    try {
      await axios.delete(`/api/v1/brews/${id}`);
    } catch (err) {
      console.log(err);
    }
  }
  async function editBrews(id, newBrew) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.patch(`/api/v1/brews/${id}`, newBrew, config);
    } catch (err) {
      console.log("edit brews error", err);
    }
  }
  async function addBrews(newBrew) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/api/v1/brews", newBrew, config);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBrews();
  }, [brew]);

  return (
    <BrewContext.Provider
      value={{
        brew,
        setBrew,
        create,
        setCreate,
        step,
        setStep,
        edit,
        setEdit,
        selectedBrew,
        setSelectedBrew,
        open,
        setOpen,
        getBrews,
        deleteBrews,
        addBrews,
        editBrews,
      }}
    >
      {props.children}
    </BrewContext.Provider>
  );
};
