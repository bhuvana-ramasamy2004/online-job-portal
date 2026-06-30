import React, { useEffect, useState } from "react";
import axios from "axios";
function MyApplications() {
const [applications, setApplications] = useState([]);
useEffect(() => {
const fetchApplications = async () => {
try {
const token = localStorage.getItem("token");
 const res = await axios.get(
"http://localhost:5000/api/applications/my-applications",
{
headers: {
Authorization: `Bearer ${token}`,
},
}
);
setApplications(res.data);
} catch (err) {
console.log(err);
}
};
fetchApplications();
}, []);
return (
<div>
<h2>My Applications</h2>
{applications.length === 0 ? (
<p>No applications yet</p>
) : (
applications.map((app) => (
<div key={app._id} style={{
border: "1px solid gray",
padding: "10px",
margin: "10px"
}}>
<p><b>Title:</b> {app.jobId?.title}</p>
<p><b>Company:</b> 
 {app.jobId?.company}</p>
<p><b>Location:</b> {app.jobId?.location}</p>
</div>
))
)}
</div>
);
}
export default MyApplications;