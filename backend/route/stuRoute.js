const stuController = require("../controller/stuController");

const express = require("express");
const route = express.Router();

route.get("/", stuController.homePage);
route.get("/students", stuController.homePage);

route.post("/students/save", stuController.stuSave);

route.get("/students/display", stuController.display);
route.get("/students/update", stuController.update);
route.get("/students/editData/:id", stuController.editData);

route.put("/students/updateData/:id", stuController.updateData);

route.delete("/students/deleteData/:id", stuController.deleteData);

route.post("/students/search",stuController.searchData)

module.exports = route;
