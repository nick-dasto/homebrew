import React, { useContext } from "react";
import StepOne from "../form-steps/StepOne";
import StepThree from "../form-steps/StepThree";
import StepFour from "../form-steps/StepFour";
import { BrewContext } from "../context/BrewContext";
import { formData } from "../config";

function Form() {
  const {
    brew,
    setBrew,
    create,
    setCreate,
    step,
    setStep,
    edit,
    setEdit,
    index,
    setOpen,
  } = useContext(BrewContext);

  const next = () => {
    const { stage } = step;
    setStep((state) => ({ ...state, stage: stage + 1 }));
  };
  const prev = () => {
    const { stage } = step;
    setStep((state) => ({ ...state, stage: stage - 1 }));
  };
  const handleChangeGeneral = (e) => {
    e.persist();
    setStep((state) => ({
      ...state,
      generalInfo: { ...state.generalInfo, [e.target.name]: e.target.value },
    }));
  };
  const handleChangeIngredients = (e) => {
    e.persist();
    setStep((state) => ({
      ...state,
      ingredients: e.target.value,
    }));
  };
  const handleChangeTasting = (e) => {
    e.persist();
    setStep((state) => ({
      ...state,
      tastingNotes: { ...state.tastingNotes, [e.target.name]: e.target.value },
    }));
  };
  const handleChange = (e) => {
    e.persist();
    setStep((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const submitEdit = (index, b) => {
    const newBrew = [...brew];
    newBrew[index] = { ...b, stage: 1 };
    setBrew(newBrew);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      submitEdit(index, step);
      setEdit(false);
      setCreate(!create);
      setOpen(false);
      setStep(formData);
    } else {
      setBrew([...brew, { ...step, stage: 1 }]);
      setCreate(!create);
      setStep(formData);
    }
  };
  switch (step.stage) {
    case 1:
      return (
        <StepOne
          step={step}
          next={next}
          prev={prev}
          handleChangeGeneral={handleChangeGeneral}
        />
      );
    case 2:
      return (
        <StepThree
          step={step}
          next={next}
          prev={prev}
          handleChangeTasting={handleChangeTasting}
        />
      );
    case 3:
      return (
        <StepFour
          step={step}
          next={next}
          prev={prev}
          handleChange={handleChange}
          handleChangeIngredients={handleChangeIngredients}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <h1>Error with form</h1>;
  }
}

export default Form;
