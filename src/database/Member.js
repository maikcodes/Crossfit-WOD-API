const DB = require("./db.json");

// CRUD methods

const getAllMembers = () => {
  return;
};

const getOneMember = (memberId) => {
  try {
    const member = DB.members.find((member) => member.id === memberId);

    if (!member) {
      throw {
        status: 400,
        message: `Can't find member with id '${memberId}'`,
      };
    }

    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
