import React from "react";

function StepOne({ step, next, handleChangeGeneral }) {
  return (
    <div className="form-container">
      <h1>General Info</h1>
      <form>
        <div className="label-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={step.generalInfo.name}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Batch Size:</label>
          <input
            type="text"
            name="batchSize"
            value={step.generalInfo.batchSize}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Batch Type:</label>
          <input
            type="text"
            name="batchType"
            value={step.generalInfo.batchType}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Batch Number:</label>
          <input
            type="text"
            name="batchNumber"
            value={step.generalInfo.batchNumber}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>IBU:</label>
          <input
            type="text"
            name="ibu"
            value={step.generalInfo.ibu}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>SRM:</label>
          <input
            type="text"
            name="srm"
            value={step.generalInfo.srm}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>ABV:</label>
          <input
            type="text"
            name="abv"
            value={step.generalInfo.abv}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Origional Gravity:</label>
          <input
            type="text"
            name="origionalGravity"
            value={step.generalInfo.origionalGravity}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Final Gravity:</label>
          <input
            type="text"
            name="finalGravity"
            value={step.generalInfo.finalGravity}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Brewing Date:</label>
          <input
            type="text"
            name="brewingDate"
            value={step.generalInfo.brewingDate}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Secondary Date:</label>
          <input
            type="text"
            name="dateSecondary"
            value={step.generalInfo.dateSecondary}
            onChange={handleChangeGeneral}
          />
        </div>
        <div className="label-group">
          <label>Bottling Date:</label>
          <input
            type="text"
            name="dateBottling"
            value={step.generalInfo.dateBottling}
            onChange={handleChangeGeneral}
          />
        </div>
        <button className="next" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
}

export default StepOne;
