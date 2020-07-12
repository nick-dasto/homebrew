import React, { useState, useContext } from "react";
import { BrewContext } from "../context/BrewContext";

function Entry({ b }) {
  const [open, setOpen] = useState(false);
  const {brew, setBrew} = useContext(BrewContext)
  const {setStep} = useContext(BrewContext)
  const {setCreate} = useContext(BrewContext)
  const {setEdit} = useContext(BrewContext)
  const {setIndex} = useContext(BrewContext)

  const handleEdit = () => {
    setEdit(true);
    setIndex(brew.indexOf(b))
    setCreate(true);
    setStep(b)
  };

  const handleDelete = () => {
    // const newBrew = brew.filter((brews) => brews !== b)
        setBrew(brew.filter((brews) => brews !== b))
        setOpen(!open)
  };

  return open ? (
    <div className="page-container">
      <div className="page one">
        <div className="general-info">
          <h2>General Info</h2>
          <div className="general-info-col-one">
            <div className="label-and-input">
              <label>Name:</label>
              <p>{b.generalInfo.name}</p>
            </div>
            <div className="label-and-input">
              <label>Batch Size:</label>
              <p>{b.generalInfo.batchSize}</p>
            </div>
            <div className="label-and-input">
              <label>Batch Type:</label>
              <p>{b.generalInfo.batchType}</p>
            </div>
            <div className="label-and-input">
              <label>Batch Number:</label>
              <p>{b.generalInfo.batchNumber}</p>
            </div>
            <div className="label-and-input">
              <label>IBU:</label>
              <p>{b.generalInfo.ibu}</p>
            </div>
            <div className="label-and-input">
              <label>ABV:</label>
              <p>{b.generalInfo.abv}</p>
            </div>
          </div>
          <div className="general-info-col-two">
            <div className="label-and-input">
              <label>Original Gravity:</label>
              <p>{b.generalInfo.origionalGravity}</p>
            </div>
            <div className="label-and-input">
              <label>Final Gravity:</label>
              <p>{b.generalInfo.finalGravity}</p>
            </div>
            <div className="label-and-input">
              <label>Brewing Date:</label>
              <p>{b.generalInfo.brewingDate}</p>
            </div>
            <div className="label-and-input">
              <label>Second date:</label>
              <p>{b.generalInfo.dateSecondary}</p>
            </div>
            <div className="label-and-input">
              <label>Bottling Date:</label>
              <p>{b.generalInfo.dateBottling}</p>
            </div>
            <div className="label-and-input">
              <label>SRM:</label>
              <p>{b.generalInfo.srm}</p>
            </div>
          </div>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ol>
            {b.ingredients.split(",").map((i) => (
              <li>{i}</li>
            ))}
          </ol>
        </div>
        <div className="brewing-notes">
          <h2>Brewing Notes</h2>
          <p>{b.brewingNotes}</p>
        </div>
      </div>
      <div className="page two">
        <div className="hop-notes">
          <h2>Hops Notes</h2>
          <p>{b.hopsNotes}</p>
        </div>
        <div className="yeast-notes">
          <h2>Yeast Notes</h2>
          <p>{b.yeastNotes}</p>
        </div>
        <div className="fermentation-notes">
          <h2>Fermentation Notes</h2>
          <p>{b.fermentationNotes}</p>
        </div>
        <div className="kegging">
          <h2>Kegging Notes</h2>
          <p>{b.keggingNotes}</p>
        </div>
        <div className="tasting-notes">
          <h2>Tasting Notes</h2>
          <div className="label-and-input">
            <label>Appearance:</label>
            <p>{b.tastingNotes.appreance}</p>
          </div>
          <div className="label-and-input">
            <label>Aroma:</label>
            <p>{b.tastingNotes.aroma}</p>
          </div>
          <div className="label-and-input">
            <label>Flavor:</label>
            <p>{b.tastingNotes.flavor}</p>
          </div>
          <div className="label-and-input">
            <label>Bitterness:</label>
            <p>{b.tastingNotes.bitterness}</p>
          </div>
          <div className="label-and-input">
            <label>Conumer Rating:</label>
            <p>{b.tastingNotes.consumerRating}</p>
          </div>
        </div>
        <div className="additional-notes">
          <h2>Additional Notes</h2>
          <p>{b.additionalNotes}</p>
        </div>
      </div>
      <button className="close" onClick={() => setOpen(!open)}>
        Close
      </button>
      <button className="edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  ) : (
    <div className="card">
      <h3>{b.generalInfo.name}</h3>
      <h5>{b.generalInfo.brewingDate}</h5>
      <div className="button-container">
        <button className="view" onClick={() => setOpen(!open)}>
          View
        </button>
      </div>
    </div>
  );
}

export default Entry;
