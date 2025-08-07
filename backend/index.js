const express = require("express");
const route = require("./route/stuRoute");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://jaiswalparitosh8:cIjozVx45WBs76R7@cluster0.d6rrtp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected");
  });

app.use("/students", route);

app.listen(8000, () => {
  console.log("Server listening at http://localhost:8000");
});
