const Record = require("../database/Record");

// CRUD methods

const getAllRecords = () => {
  return;
};

const getOneRecord = (recordId) => {
  return;
};

const createNewRecord = (newRecord) => {
  return;
};

const updateOneRecord = (recordId, changes) => {
  return;
};

const deleteOneRecord = (recordId) => {
  return;
};

// Extra methods

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRecords,
  getOneRecord,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord,
  getRecordForWorkout,
};
