const express = require("express");
const router = express.Router();
const {
  getPredictions,
  addPrediction,
  deletePrediction,
} = require("../controllers/predictionsController");

router.route("/").get(getPredictions).post(addPrediction);

router.route("/:id").delete(deletePrediction);

module.exports = router;
