import { useParams } from "react-router-dom";
import "../css/Edit.css";
import BackendURL from "../utils/BackendUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    rollno: "",
    course: "",
    email: "",
  });

  const loadData = async () => {
    let api = `${BackendURL}students/editData/${id}`;
    let res = await axios.get(api);
    setStudent({
      name: res.data.Name || "",
      rollno: res.data.RollNo || "",
      course: res.data.Course || "",
      email: res.data.Mail || "",
    });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudent((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendURL}students/updateData/${id}`;
    let res = await axios.put(api, student);
    toast.success("Student data updated!", {
      className: "my-success-toast",
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="edit-container">
        <h2 className="edit-title">Edit Student Details</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={student.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>Roll No:</label>
            <input
              type="text"
              name="rollno"
              placeholder="Enter roll number"
              value={student.rollno}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course"
              value={student.course}
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={student.email}
              onChange={handleInput}
            />
          </div>
          <button className="update-btn" type="submit">
            Update
          </button>
        </form>
      </div>
      <ToastContainer
        hideProgressBar={true}
        theme="colored"
        position="top-center"
        autoClose={400}
      />
    </>
  );
};

export default Edit;
