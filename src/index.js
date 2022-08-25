const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const PORT = process.env.PORT || 4000;

// Settings
app.use(bodyParser.json());

// testing
app.get("/", (req, res) => {
  res.send("<h1> Setting up Crossfit WOD API </h1>");
});

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
