const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  Name: { type: String },
  RollNo: { type: Number },
  Course: { type: String },
  Mail: { type: String },
});

module.exports = mongoose.model("Student", stuSchema);
