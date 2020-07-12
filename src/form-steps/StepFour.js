import React from "react";

function StepFour({
  step,
  prev,
  handleChange,
  handleChangeIngredients,
  handleSubmit,
}) {
  return (
    <div className="form-container">
      <h1>Notes</h1>
      <form>
        <div className="label-group">
          <label>Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            value={step.ingredients}
            onChange={handleChangeIngredients}
          />
        </div>
        <div className="label-group">
          <label>Brewing Notes:</label>
          <input
            type="text"
            name="brewingNotes"
            value={step.brewingNotes}
            onChange={handleChange}
          />
        </div>
        <div className="label-group">
          <label>Hops Notes:</label>
          <input
            type="text"
            name="hopsNotes"
            value={step.hopsNotes}
            onChange={handleChange}
          />
        </div>
        <div className="label-group">
          <label>Yeast Notes:</label>
          <input
            type="text"
            name="yeastNotes"
            value={step.yeastNotes}
            onChange={handleChange}
          />
        </div>
        <div className="label-group">
          <label>Fermentation Notes:</label>
          <input
            type="text"
            name="fermentationNotes"
            value={step.fermentationNotes}
            onChange={handleChange}
          />
        </div>
        <div className="label-group">
          <label>Kegging Notes:</label>
          <input
            type="text"
            name="keggingNotes"
            value={step.keggingNotes}
            onChange={handleChange}
          />
        </div>
        <div className="label-group">
          <label>Additional Notes:</label>
          <input
            type="text"
            name="additionalNotes"
            value={step.additionalNotes}
            onChange={handleChange}
          />
        </div>
        <button className="prev" onClick={prev}>
          Prev
        </button>
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}

export default StepFour;
