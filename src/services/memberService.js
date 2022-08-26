const Member = require("../database/Member");

// CRUD methods

const getAllMembers = () => {
  return;
};

const getOneMember = (memberId) => {
  try {
    const member = Member.getOneMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
};

const createNewMember = (newMember) => {
  return;
};

const updateOneMember = (memberId, changes) => {
  return;
};

const deleteOneMember = (memberId) => {
  return;
};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember,
};
