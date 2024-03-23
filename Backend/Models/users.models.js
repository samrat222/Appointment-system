const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointment", AppointmentSchema);
