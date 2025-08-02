const stuModel = require("../models/stuModel");

const homePage = (req, res) => {
  res.send("<h1>Welcome</h1>");
};

const stuSave = async (req, res) => {
  const { name, rollno, course, year, email } = req.body;
  const Student = await stuModel.create({
    Name: name,
    RollNo: rollno,
    Course: course,
    AdminssionYear: year,
    Mail: email,
  });
  res.send("<h1>Saved successfully!</h1>");
};

const display = async (req, res) => {
  const Student = await stuModel.find();
  res.send(Student);
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  await stuModel.findByIdAndDelete(id);
  res.send("Deleted");
};

module.exports = { stuSave, homePage, display, deleteData };
