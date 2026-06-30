import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function JobList() {
const [jobs, setJobs] = useState([]);
const navigate = useNavigate(); // ✅ add this
useEffect(() => {
fetchJobs();
}, []);
const fetchJobs = async () => {
try {
const res = await axios.get("http://localhost:5000/api/jobs");
setJobs(res.data);
} catch (err) {
console.log(err);
}
};
return (
<div style={{ padding: "40px" }}>
<h2>Available Jobs</h2>
{jobs.length === 0 ? (
<p>No Jobs Available</p>
) : (
jobs.map((job) => (
    <div
key={job._id}
style={{
border: "1px solid #ddd",
padding: "20px",
marginBottom: "20px",
borderRadius: "8px",
boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
}}
>
<h3>{job.title}</h3>
<p><strong>Company:</strong> {job.company}</p>
<p><strong>Location:</strong> {job.location}</p>
<p><strong>Salary:</strong> ₹{job.salary}</p>
{/* ✅ FIXED BUTTON */}
<button
onClick={() => navigate(`/apply/${job._id}`)}
style={{
padding: "8px 15px",
background: "#007bff",
color: "white",
border: "none",
borderRadius: "5px",
cursor: "pointer"
}}
>
Apply
</button>
</div>
))
)}
</div>
);
}
export default JobList;
