import React, { useState } from "react";
import StepOne from "./form-steps/StepOne";
import StepThree from "./form-steps/StepThree";
import StepFour from "./form-steps/StepFour";
import "./form-steps/Form.css";

function Form({ brew, setBrew, create, setCreate }) {
  const [step, setStep] = useState({
    stage: 1,
    generalInfo: {
      name: "",
      batchSize: "",
      batchType: "",
      batchNumber: "",
      ibu: "",
      srm: "",
      abv: "",
      origionalGravity: "",
      finalGravity: "",
      brewingDate: "",
      dateSecondary: "",
      dateBottling: "",
    },
    ingredients: "",
    brewingNotes: "",
    hopsNotes: "",
    yeastNotes: "",
    fermentationNotes: "",
    keggingNotes: "",
    tastingNotes: {
      appreance: "",
      aroma: "",
      flavor: "",
      bitterness: "",
    },
    additionalNotes: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setBrew([...brew, step]);
    setCreate(!create);
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
  }
}

export default Form;
