const stuController = require("../controller/stuController");

const express = require("express");
const route = express.Router();

route.get("/", stuController.homePage);
route.get("/students", stuController.homePage);

route.post("/save", stuController.stuSave);
route.get("/display", stuController.display);
route.get("/update", stuController.update);


route.delete("/deleteData/:id", stuController.deleteData);


module.exports = route;
