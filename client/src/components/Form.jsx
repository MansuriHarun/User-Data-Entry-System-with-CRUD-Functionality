import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Form() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({...formData, [name]: value});
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8000/api/v1/user", {
        user: formData.user,
        email: formData.email,
        age: formData.age,
        mobile: formData.mobile,
        work: formData.work,
        address: formData.address,
        description: formData.description
      });
      if(res.status === 200) {
        alert("User data saved successfully");
        navigation("/")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="addData">
      <h1>Add Data</h1>
      <form onSubmit={postData}>
        <label>Username</label>
        <input type="text" name="user" value={formData.user} onChange={handleData} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleData} />
        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleData} />
        <label>Mobile</label>
        <input type="number" name="mobile" value={formData.mobile} onChange={handleData} />
        <label>Work</label>
        <input type="text" name="work" value={formData.work} onChange={handleData} />
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleData} />
        <label>Description</label>
        <textarea rows={10} name="description" value={formData.description} onChange={handleData}></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
