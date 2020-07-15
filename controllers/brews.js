const Brew = require("../models/Brew");

// @desc Get all brews
// @route GET /api/v1/brews
// @access Public
exports.getBrews = async (req, res, next) => {
  try {
    const brews = await Brew.find();
    return res.status(200).json({
      success: true,
      count: brews.length,
      data: brews,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
// @desc Add all brews
// @route POST /api/v1/brews
// @access Public
exports.addBrews = async (req, res, next) => {
  try {
    const { generalInfo } = req.body;
    const brew = await Brew.create(req.body);
    return res.status(201).json({
      success: true,
      data: brew,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
// @desc Delete brew
// @route DELETE /api/v1/brews/:id
// @access Public
exports.deleteBrews = async (req, res, next) => {
  try {
    const brew = await Brew.findById(req.params.id);
    if (!brew) {
      return res.status(404).json({
        success: false,
        error: "No brew found",
      });
    }
    await brew.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
// @desc Edit brew
// @route PATCH /api/v1/brews/:id
// @access Public
exports.editBrews = async (req, res, next) => {
  try {
    const brew = await Brew.findById(req.params.id);
    if (!brew) {
      return res.status(404).json({
        success: false,
        error: "No brew found",
      });
    }
    if (req.body.stage != null) {
      brew.stage = req.body.stage;
    }
    if (req.body.generalInfo.name != null) {
      brew.generalInfo.name = req.body.generalInfo.name;
    }
    if (req.body.generalInfo.batchSize != null) {
      brew.generalInfo.batchSize = req.body.generalInfo.batchSize;
    }
    if (req.body.generalInfo.batchType != null) {
      brew.generalInfo.batchType = req.body.generalInfo.batchType;
    }
    if (req.body.generalInfo.batchNumber != null) {
      brew.generalInfo.batchNumber = req.body.generalInfo.batchNumber;
    }
    if (req.body.generalInfo.ibu != null) {
      brew.generalInfo.ibu = req.body.generalInfo.ibu;
    }
    if (req.body.generalInfo.srm != null) {
      brew.generalInfo.srm = req.body.generalInfo.srm;
    }
    if (req.body.generalInfo.originalGravity != null) {
      brew.generalInfo.originalGravity = req.body.generalInfo.originalGravity;
    }
    if (req.body.generalInfo.finalGravity != null) {
      brew.generalInfo.finalGravity = req.body.generalInfo.finalGravity;
    }
    if (req.body.generalInfo.brewingDate != null) {
      brew.generalInfo.brewingDate = req.body.generalInfo.brewingDate;
    }
    if (req.body.generalInfo.dateSecondary != null) {
      brew.generalInfo.dateSecondary = req.body.generalInfo.dateSecondary;
    }
    if (req.body.generalInfo.dateBottling != null) {
      brew.generalInfo.dateBottling = req.body.generalInfo.dateBottling;
    }
    if (req.body.ingredients != null) {
      brew.ingredients = req.body.ingredients;
    }
    if (req.body.brewingNotes != null) {
      brew.brewingNotes = req.body.brewingNotes;
    }
    if (req.body.hopsNotes != null) {
      brew.hopsNotes = req.body.hopsNotes;
    }
    if (req.body.yeastNotes != null) {
      brew.yeastNotes = req.body.yeastNotes;
    }
    if (req.body.fermentationNotes != null) {
      brew.fermentationNotes = req.body.fermentationNotes;
    }
    if (req.body.keggingNotes != null) {
      brew.keggingNotes = req.body.keggingNotes;
    }
    if (req.body.tastingNotes.appearance != null) {
      brew.tastingNotes.appearance = req.body.tastingNotes.appearance;
    }
    if (req.body.tastingNotes.aroma != null) {
      brew.tastingNotes.aroma = req.body.tastingNotes.aroma;
    }
    if (req.body.tastingNotes.flavor != null) {
      brew.tastingNotes.flavor = req.body.tastingNotes.flavor;
    }
    if (req.body.tastingNotes.bitterness != null) {
      brew.tastingNotes.bitterness = req.body.tastingNotes.bitterness;
    }
    if (req.body.tastingNotes.consumerRating != null) {
      brew.tastingNotes.consumerRating = req.body.tastingNotes.consumerRating;
    }
    if (req.body.additionalNotes != null) {
      brew.additionalNotes = req.body.additionalNotes;
    }
    const updatedBrew = await brew.save();
    return res.status(201).json({
      success: true,
      data: updatedBrew,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
