import { useEffect, useState } from "react";
import "../css/Display.css";

const Display = () => {
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${BackendURL}students/get`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div className="display-container">
      <h2 className="display-title">Student Records</h2>

      <div className="search-sort-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or roll no..."
        />
        <select className="sort-select">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="rollno">Roll No</option>
          <option value="course">Course</option>
        </select>
      </div>

      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>E-Mail</th>
         
          </tr>
        </thead>
        <tbody>
          <tr>{/* Display Logic Will Be Here */}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
