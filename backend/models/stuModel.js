const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  RollNo: { type: Number, required: true },
  Course: { type: String },
  Mail: { type: String },
});

module.exports = mongoose.model("Student", stuSchema);
