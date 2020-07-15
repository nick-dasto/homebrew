const express = require("express");
const router = express.Router();
const {
  getBrews,
  addBrews,
  deleteBrews,
  editBrews,
} = require("../controllers/brews");

router.route("/").get(getBrews).post(addBrews);
router.route("/:id").delete(deleteBrews).patch(editBrews);

module.exports = router;
