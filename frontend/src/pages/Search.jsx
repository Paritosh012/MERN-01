import { useState } from "react";
import BackendURL from "../utils/BackendUrl";
import axios from "axios";
import "../css/Search.css"; // ✅ Import the new CSS

const Search = () => {
  const [rno, setRollno] = useState();
  const [myData, setMyData] = useState([]);

  const searchData = async () => {
    let api = `${BackendURL}students/search`;
    let res = await axios.post(api, { rollno: rno });
    setMyData(res.data);
  };

  return (
    <>
      <div className="search-container">
        <label htmlFor="rollno" className="search-label">Enter Roll No:</label>
        <input
          type="text"
          value={rno}
          name="rollno"
          id="rollno"
          onChange={(e) => {
            setRollno(e.target.value);
          }}
          className="search-input"
        />
        <button onClick={searchData} className="search-button">Search</button>
      </div>

      <div className="table-container">
        <table className="search-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Mail</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((key) => {
              return (
                <>
                  <td>{key.Name}</td>
                  <td>{key.RollNo}</td>
                  <td>{key.Course}</td>
                  <td>{key.Mail}</td>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Search;
