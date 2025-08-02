import "../css/Display.css";

const Update = () => {
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
            <th>Duration</th>
            <th>Fees</th>
            <th>Institute</th>
            <th>Actions</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>Ravi Sharma</td>
            <td>101</td>
            <td>Full Stack</td>
            <td>6 months</td>
            <td>₹25,000</td>
            <td>Cybrom</td>
            <td>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Update;
