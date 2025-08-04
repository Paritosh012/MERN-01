import { useEffect, useState } from "react";
import "../css/Display.css";
import axios from "axios";
import BackendURL from "../utils/BackendUrl";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = `${BackendURL}students/update`;
    let res = await axios.get(api);
    setStudents(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const Edit = (id) => {
    navigate(`/myEdit/${id}`);
  };

  const deleteData = async (id) => {
    let api = `${BackendURL}students/deleteData/${id}`;
    await axios.delete(api);
    toast.success("Student data deleted successfully!", {
      style: {
        background: "#2e6dccff",
        color: "#fff",
        fontWeight: "bold",
        width: "30vw",
        textAlign: "center",
      },
    });
    loadData();
  };

  const ans = students.map((key) => {
    return (
      <tr>
        <td> {key.Name} </td>
        <td> {key.RollNo} </td>
        <td> {key.Course} </td>
        <td> {key.Mail} </td>
        <td>
          <button
            className="btn edit-btn"
            onClick={() => {
              Edit(key._id);
            }}
          >
            Edit
          </button>
          <button
            className="btn delete-btn"
            onClick={() => {
              deleteData(key._id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="display-container">
      <ToastContainer
        hideProgressBar={true}
        theme="colored"
        position="top-center"
        autoClose={400}
      />
      <h2 className="display-title">Student Records</h2>

      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>E-Mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default Update;
