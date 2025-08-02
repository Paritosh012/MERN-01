const stuController = require("../controller/stuController");

const express = require("express");
const route = express.Router();

route.get("/", stuController.homePage);

route.post("/students/save", stuController.stuSave);



module.exports = route;
 