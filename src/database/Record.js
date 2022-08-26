const DB = require("./db.json");

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
    const record = DB.records.filter((record) => record.workout === workoutId);

    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
