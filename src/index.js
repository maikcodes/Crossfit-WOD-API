const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1MemberRouter = require("./v1/routes/memberRoutes");

const PORT = process.env.PORT || 4000;

// Settings
app.use(bodyParser.json());

// testing
app.get("/", (req, res) => {
  res.send("<h1> Setting up Crosssit WOD API </h1>");
});

app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/members", v1MemberRouter);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
