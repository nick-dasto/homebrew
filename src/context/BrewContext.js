import React, { useState, useEffect, createContext } from "react";
import { testBrews, formData } from "../config";

export const BrewContext = createContext();

export const BrewProvider = (props) => {
  const loadBrews = localStorage.getItem("brews");
  const [brew, setBrew] = useState(
    loadBrews !== null ? JSON.parse(loadBrews) : testBrews
  );
  const [create, setCreate] = useState(false);
  const [step, setStep] = useState(formData);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("brews", JSON.stringify(brew));
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
        index,
        setIndex,
        selectedBrew,
        setSelectedBrew,
        open,
        setOpen,
      }}
    >
      {props.children}
    </BrewContext.Provider>
  );
};
