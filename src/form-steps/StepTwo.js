import React from "react";

function StepTwo({ next, prev, handleChangeHydrometer }) {
  return (
    <div className="form-container">
      <h1>Hydrometer Reading</h1>
      <form>
        <div className="label-group">
          <label>Date & Time:</label>
          <input
            type="text"
            name="dateTime"
            onChange={handleChangeHydrometer}
          />
        </div>
        <div className="label-group">
          <label>Specific Gravity:</label>
          <input
            type="text"
            name="specificGravity"
            onChange={handleChangeHydrometer}
          />
        </div>
        <div className="label-group">
          <label>Sugar Scale:</label>
          <input
            type="text"
            name="sugarScale"
            onChange={handleChangeHydrometer}
          />
        </div>
        <div className="label-group">
          <label>Potential Alcohol:</label>
          <input
            type="text"
            name="potentialAlcohol"
            onChange={handleChangeHydrometer}
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

export default StepTwo;
