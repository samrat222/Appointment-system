const express = require("express");
const app = express();
const appointment = require("./Routes/appointmentRoutes");
const cors = require("cors");
require("./Db");

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started");
});

app.use("/api/v1", appointment);
