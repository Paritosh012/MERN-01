const express = require("express");
const route = require("./route/stuRoute");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://localhost:27017/studentDB").then(() => {
  console.log("DB Connected");
});

app.use("/students", route);

app.listen(8000, () => {
  console.log("Server listening at http://localhost:8000");
});
