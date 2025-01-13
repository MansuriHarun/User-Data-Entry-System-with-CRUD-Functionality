import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("http://localhost:8000/api/v1/user");
        console.log(res.data.user)
        setUsers(res.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const handleDelete = (id) => {
    Axios.delete("http://localhost:8000/api/v1/user/" + id).then(() => {
      alert("User Deleted Successfully");
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="home">
      <button>
        <Link to="/form">Add Data</Link>
      </button>
      <div className="dataTable">
        <table border="1">
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Number</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
                <td>1</td>
                <td>{user.user}</td>
                <td>{user.email}</td>
                <td>{user.work}</td>
                <td>{user.mobile}</td>
                <td style={{cursor: "pointer"}}><Link to={`/user/${user._id}`}>View</Link></td>
                <td style={{cursor: "pointer"}}><Link to={`/edit/${user._id}`}>Edit</Link></td>
                <td style={{cursor: "pointer"}} onClick={() => handleDelete(user._id)}>Delete</td>
                </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;