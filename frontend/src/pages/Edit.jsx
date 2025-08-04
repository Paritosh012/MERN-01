import { useParams } from "react-router-dom";
import "../css/Edit.css";

const Edit = () => {
  const { id } = useParams();
  const loadData = async () => {};
  return (
    <>
      <div className="edit-container">
        <h2 className="edit-title">Edit Student Details</h2>
        <form className="edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Roll No:</label>
            <input type="text" placeholder="Enter roll number" />
          </div>
          <div className="form-group">
            <label>Course:</label>
            <input type="text" placeholder="Enter course" />
          </div>
          <div className="form-group">
            <label>Admission Year:</label>
            <input type="text" placeholder="Enter year" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <button className="update-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
