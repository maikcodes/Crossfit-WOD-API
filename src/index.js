const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1MemberRouter = require("./v1/routes/memberRoutes");

const cache = apicache.middleware;
const PORT = process.env.PORT || 4000;

// Settings
app.use(bodyParser.json());
app.use(cache("2 minutes"));

app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/members", v1MemberRouter);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
