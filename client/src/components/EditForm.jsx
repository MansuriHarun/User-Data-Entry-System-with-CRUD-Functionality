import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });
  const navigation = useNavigate();
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      Axios.put("http://localhost:8000/api/v1/user/" + id, {
        user: formData.user,
        email: formData.email,
        age: formData.age,
        mobile: formData.mobile,
        work: formData.work,
        address: formData.address,
        description: formData.description,
      })
        .then(() => {
          alert("User Data Updated Successfully");
          navigation("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="addData">
      <h1>Edit Data</h1>
      <form onSubmit={postData}>
        <label>Username</label>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleData}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleData}
          required
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleData}
          required
        />
        <label>Mobile</label>
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleData}
          required
        />
        <label>Work</label>
        <input
          type="text"
          name="work"
          value={formData.work}
          onChange={handleData}
          required
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleData}
          required
        />
        <label>Description</label>
        <textarea
          rows={10}
          name="description"
          value={formData.description}
          onChange={handleData}
          required
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

export default EditForm;
