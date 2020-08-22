import React, { useContext } from "react";
import StepOne from "../form-steps/StepOne";
import StepTwo from "../form-steps/StepTwo";
import StepThree from "../form-steps/StepThree";
import StepFour from "../form-steps/StepFour";
import { BrewContext } from "../context/BrewContext";
import { formData } from "../context/AppReducer";

function Form() {
  const {
    create, setCreate, step, setStep,
    edit, setEdit, setOpen, editBrews,
    selectedBrew, addBrews } = useContext(BrewContext);

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
  const handleChangeIngredients = (e, index) => {
    e.persist();
    const newIngredients = [...step.ingredients];
    newIngredients[index] = e.target.value;
    setStep((state) => ({
      ...state,
      ingredients: newIngredients,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editBrews(selectedBrew._id, step);
      setEdit(false);
      setCreate(!create);
      setOpen(false);
      setStep(formData);
    } else {
      addBrews(step);
      setCreate(!create);
      setStep(formData);
    }
  };
  const returnABV = () => {
    if (
      parseFloat(step.generalInfo.originalGravity) < 0.0000001 ||
      parseFloat(step.generalInfo.finalGravity) < 0.0000001
    ) {
      return "0%";
    } else {
      const calcABV = `${Number(
        (
          (parseFloat(step.generalInfo.originalGravity) -
            parseFloat(step.generalInfo.finalGravity)) *
          131.25
        ).toFixed(2)
      )}%`;
      return calcABV;
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
          returnABV={returnABV}
        />
      );
    case 2:
      return (
        <StepTwo
          step={step}
          setStep={setStep}
          next={next}
          prev={prev}
          handleChangeIngredients={handleChangeIngredients}
        />
      );
    case 3:
      return (
        <StepThree
          step={step}
          next={next}
          prev={prev}
          handleChangeTasting={handleChangeTasting}
        />
      );
    case 4:
      return (
        <StepFour
          step={step}
          next={next}
          prev={prev}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <h1>Error with form</h1>;
  }
}

export default Form;
