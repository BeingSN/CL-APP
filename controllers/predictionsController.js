const Prediction = require("../models/Prediction");

// @desc Get all standings
// @route  GET /api/v1/standings
// @access  Public

exports.getPredictions = async (req, res, next) => {
  try {
    const predictions = await Prediction.find();
    return res.status(200).json({
      success: true,
      count: predictions.length,
      data: predictions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "there was a servor error",
    });
  }
};

exports.addPrediction = async (req, res, next) => {
  try {
    const { text, score } = req.body;
    const prediction = await Prediction.create(req.body);

    return res.status(201).json({
      success: true,
      data: prediction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "there was a servor error",
      });
    }
  }
};
exports.deletePrediction = async (req, res, next) => {
  try {
    const prediction = await Prediction.findById(req.params.id);
    if (!prediction) {
      return res.status(404).json({
        success: false,
        error: "No prediction found",
      });
    }
    await prediction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "there was a servor error",
    });
  }
};
