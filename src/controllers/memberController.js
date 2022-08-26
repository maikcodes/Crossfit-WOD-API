const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
  return;
};

const getOneMember = (req, res) => {
  const {
    params: { memberId },
  } = req;

  if (!memberId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const member = memberService.getOneMember(memberId);
    res.send({ status: "OK", data: member });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewMember = (req, res) => {
  return;
};

const updateOneMember = (req, res) => {
  return;
};

const deleteOneMember = (req, res) => {
  return;
};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember,
};
