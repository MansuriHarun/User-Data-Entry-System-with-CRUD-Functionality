import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      try {
        Axios.get("http://localhost:8000/api/v1/user/" + id)
          .then((res) => {
            console.log(res.data.user);
            setUserData(res.data.user);
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
        Welcome {userData.user}
      </h1>
        <div
          className="div"
          style={{
            border: "2px solid black",
            padding: "1rem",
            width: "50%",
            margin: "2rem",
          }}
        >
          <div className="userData">
            <p>
              <strong>Name: </strong>
              {userData.user}
            </p>
            <p>
              <strong>Mobile: </strong>
              {userData.mobile}
            </p>
            <p>
              <strong>Age: </strong>
              {userData.age}
            </p>
            <p>
              <strong>Location: </strong>
              {userData.address}
            </p>
            <p>
              <strong>Email: </strong>
              {userData.email}
            </p>
            <p>
              <strong>Occupation: </strong>
              {userData.work}
            </p>
          </div>
          <p>
            <strong>Description: </strong>
            {userData.description}
          </p>
        </div>
    </div>
  );
}

export default UserDetails;
