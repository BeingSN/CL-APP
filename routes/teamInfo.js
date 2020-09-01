const express = require("express");
const router = express.Router();
const {
  getTeamInfo,
  addTeamInfo,
  deleteTeamInfo,
} = require("../controllers/teamInfoController");

router.route("/").get(getTeamInfo).post(addTeamInfo);

router.route("/:id").delete(deleteTeamInfo);

module.exports = router;
