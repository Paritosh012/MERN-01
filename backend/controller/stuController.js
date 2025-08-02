const stuModel = require("../models/stuModel");

const homePage = (req, res) => {
  res.send("<h1>Welcome</h1>");
};

const stuSave = async (req, res) => {
  const { name, rollno, course, year, email } = req.body;
  try {
    const Student = await stuModel.create({
      Name: name,
      RollNo: rollno,
      Course: course,
      AdminssionYear: year,
      Mail: email,
    });
    res.send("<h1>Saved successfully!</h1>");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving student");
  }
};

module.exports = { stuSave ,homePage};
