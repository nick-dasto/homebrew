import React from "react";

function StepThree({ step, next, prev, handleChangeTasting }) {
  return (
    <div className="form-container">
      <h1>Tasting</h1>
      <form>
        <div className="label-group">
          <label>Appearance:</label>
          <input
            type="text"
            name="appreance"
            value={step.tastingNotes.appreance}
            onChange={handleChangeTasting}
          />
        </div>
        <div className="label-group">
          <label>Aroma:</label>
          <input
            type="text"
            name="aroma"
            value={step.tastingNotes.aroma}
            onChange={handleChangeTasting}
          />
        </div>
        <div className="label-group">
          <label>Flavor:</label>
          <input
            type="text"
            name="flavor"
            value={step.tastingNotes.flavor}
            onChange={handleChangeTasting}
          />
        </div>
        <div className="label-group">
          <label>Bitterness:</label>
          <input
            type="text"
            name="bitterness"
            value={step.tastingNotes.bitterness}
            onChange={handleChangeTasting}
          />
        </div>
        <button className="prev" onClick={prev}>
          Prev
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
}

export default StepThree;
