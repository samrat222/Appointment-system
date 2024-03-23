const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;
const connect = async (req, res) => {
  try {
    await mongoose.connect(DB_URL).then(() => {
      console.log("DB connection succefull");
    });
  } catch (err) {
    res.status(400).json({ msg: "Not connected" });
  }
};

connect();
