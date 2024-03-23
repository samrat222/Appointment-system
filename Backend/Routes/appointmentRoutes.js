const express = require("express");
const router = express.Router();
const Appointment = require("../Models/users.models");

router.post("/appoinment", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ msg: err.msg });
  }
});

router.get("/getData", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
});

module.exports = router;
