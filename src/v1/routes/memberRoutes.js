const express = require("express");
const memberController = require("../../controllers/memberController");

const router = express.Router();

router
  .get("/", memberController.getAllMembers)
  .get("/:memberId", memberController.getOneMember)
  .post("/", memberController.createNewMember)
  .patch("/:memberId", memberController.updateOneMember)
  .delete("/:memberId", memberController.deleteOneMember);

module.exports = router;
