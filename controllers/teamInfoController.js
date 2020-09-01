const TeamInfo = require("../models/TeamInfo");

// @desc Get all standings
// @route  GET /api/v1/teaminfo
// @access  Public

exports.getTeamInfo = async (req, res, next) => {
  try {
    const teamInfo = await TeamInfo.find();
    return res.status(200).json({
      success: true,
      count: teamInfo.length,
      data: teamInfo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "there was a servor error",
    });
  }
};

exports.addTeamInfo = async (req, res, next) => {
  try {
    const { name, shortName, crestUrl, venue } = req.body;
    const teamInfo = await TeamInfo.create(req.body);

    return res.status(201).json({
      success: true,
      data: teamInfo,
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
exports.deleteTeamInfo = async (req, res, next) => {
  try {
    const teamInfo = await TeamInfo.findById(req.params.id);
    if (!teamInfo) {
      return res.status(404).json({
        success: false,
        error: "No TeamInfo found",
      });
    }
    await teamInfo.remove();
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
