const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Brews = require("../models/Brews");

router.get('/brews', auth, async (req, res) => {
  try {
        const brews = await Brews.find({userId: req.user});
        return res.status(200).json(brews);
  } catch (err) {
        return res.status(500).json({
            error: "Server Error",
    });
  }
});
router.post('/brews', auth, async (req, res) => {
  try {
        const potentialBrew = req.body;
        const newBrew = new Brews({
            ...potentialBrew,
            userId:req.user
        });
        const brew = await newBrew.save();
        return res.status(201).json(brew);
  } catch (err) {
        return res.status(500).json({
            error: "Server Error",
    });
  }
});
router.delete('/brews/:id', auth, async (req, res) => {
  try {
    const brew = await Brews.findById({userId: req.user, _id: req.params.id});
    if (!brew) {
      return res.status(404).json({
        error: "No brew found",
      });
    }
    const deleteBrew = await Brews.findByIdAndDelete(req.params.id);
    return res.status(200).json(deleteBrew)
} catch (err) {
    return res.status(500).json({
      error: "Server Error",
    });
  }
});
router.patch('/brews/:id', auth, async (req, res) => {
  try {
    const brew = await Brews.findOne({userId: req.user, _id: req.params.id});
    if (!brew) {
      return res.status(404).json({
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
    return res.status(201).json(updatedBrew);
  } catch (err) {
        return res.status(500).json({
            error: "Server Error",
    });
  }
});

module.exports = router;
