const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");

const BrewScheme = new mongoose.Schema({
  stage: {
    type: Number,
    trim: true,
  },
  generalInfo: {
    name: {
      type: String,
      trim: true,
    },
    batchSize: {
      type: String,
      trim: true,
    },
    batchType: {
      type: String,
      trim: true,
    },
    batchNumber: {
      type: String,
      trim: true,
    },
    ibu: {
      type: String,
      trim: true,
    },
    srm: {
      type: String,
      trim: true,
    },
    abv: {
      type: String,
      trim: true,
    },
    originalGravity: {
      type: String,
      trim: true,
    },
    finalGravity: {
      type: String,
      trim: true,
    },
    brewingDate: {
      type: String,
      trim: true,
    },
    dateSecondary: {
      type: String,
      trim: true,
    },
    dateBottling: {
      type: String,
      trim: true,
    },
  },
  ingredients: {
    type: ["String"],
    trim: true,
  },
  brewingNotes: {
    type: String,
    trim: true,
  },
  hopsNotes: {
    type: String,
    trim: true,
  },
  yeastNotes: {
    type: String,
    trim: true,
  },
  fermentationNotes: {
    type: String,
    trim: true,
  },
  keggingNotes: {
    type: String,
    trim: true,
  },
  tastingNotes: {
    appearance: {
      type: String,
      trim: true,
    },
    aroma: {
      type: String,
      trim: true,
    },
    flavor: {
      type: String,
      trim: true,
    },
    bitterness: {
      type: String,
      trim: true,
    },
  },
  additionalNotes: {
    type: String,
    trim: true,
  },
  userId: {type: String, required: true}
});

module.exports = mongoose.model("Brew", BrewScheme);
