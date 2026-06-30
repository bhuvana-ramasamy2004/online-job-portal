import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function ApplyJob() {
const { id } = useParams();
const navigate = useNavigate();
const [formData, setFormData] = useState({
name: "",
phoneNumber:"",
email:"",
city: "",
college: "",
course: "",
});
const [resume, setResume] = useState(null);
const handleChange = (e) => {
setFormData({
...formData,[e.target.name]: e.target.value,
});
};
const handleSubmit = async (e) => {
e.preventDefault();
const token = localStorage.getItem("token");
const data = new FormData();
data.append("jobId", id);
data.append("name", formData.name);
data.append("phoneNumber",formData.phoneNumber);
data.append("email",formData.email)
data.append("city", formData.city);
data.append("college", formData.college);
data.append("course", formData.course);
data.append("resume", resume);
try {
await axios.post(
"http://localhost:5000/api/applications/apply",
data,
{
headers: {
Authorization: `Bearer ${token}`,
"Content-Type": "multipart/form-data",
},
}
);
alert("Application Submitted Successfully!");
navigate("/my-applications");
} catch (err) {
    console.log(err);
    alert("Application Failed");
    }
    };
    return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
    <h2>Apply for Job</h2>
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="name"
    placeholder="Enter your name"
    onChange={handleChange}
    required
    />
    <br/><br/>
    <input
    type="email"
    name="email"
    placeholder="Enter Email"
    onChange={handleChange}
    required
    />
    <br/><br/>
    <input
    type="text"
    name="phoneNumber"
    placeholder="Enter phone number"
onChange={handleChange}
required
/>
<br/><br/>
<input
type="text"
name="city"
placeholder="Enter your city"
onChange={handleChange}
required
/>
<br /><br />
<input
type="text"
name="college"
placeholder="Enter your college/university"
onChange={handleChange}
required
/>
<br /><br />
<input
type="text"
name="course"
placeholder="Enter your course"
onChange={handleChange}
required
/><br /><br />
<input
type="file"
onChange={(e) => setResume(e.target.files[0])}
required
/>
<br /><br />
<button type="submit">Submit Application</button>
</form>
 </div>
);
}
export default ApplyJob;