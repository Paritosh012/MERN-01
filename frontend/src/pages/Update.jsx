import { useEffect, useState } from "react";
import "../css/Display.css";
import axios from "axios";
import BackendURL from "../utils/BackendUrl";

const Update = () => {
  const [students, setStudents] = useState([]);
  const loadData = async () => {
    let api = `${BackendURL}students/display`;
    let res = await axios.get(api);
    setStudents(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = async (id) => {
    let api = `${BackendURL}students/deleteData/${id}`;
    await axios.delete(api);
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
          <button className="btn edit-btn">Edit</button>
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
