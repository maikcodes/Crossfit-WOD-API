const recordService = require("../services/recordService");

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

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
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
