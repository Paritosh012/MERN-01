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
    Mail: email,
  });
  res.send("<h1>Saved successfully!</h1>");
};

const display = async (req, res) => {
  const Student = await stuModel.find();
  res.send(Student);
};

const update = async (req, res) => {
  const Student = await stuModel.find();
  res.send(Student);
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  await stuModel.findByIdAndDelete(id);
  res.send("<h1>Data Successfully Deleted</h1>  ");
};

const editData = async (req, res) => {
  const { id } = req.params;
  const Student = await stuModel.findById(id);
  res.send(Student);
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const { Name, RollNo, Course, Mail } = req.body;
  const Student = await stuModel.findByIdAndUpdate(id, {
    Name: Name,
    RollNo: RollNo,
    Course: Course,
    Mail: Mail,
  });
  res.send(Student);
};

const searchData = async (req, res) => {
  const { rollno } = req.body;
  const Student = await stuModel.find({ RollNo: rollno });
  console.log(rollno);
  res.send(Student);
};

module.exports = {
  stuSave,
  homePage,
  display,
  update,
  deleteData,
  editData,
  updateData,
  searchData,
};
