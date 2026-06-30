import axios from "axios";
import { useState } from "react";
function AddJob() {
const [job, setJob] = useState({
title:"",
company:"",
location:"",
salary:"",
description:""
});
const handleChange = (e)=>{
setJob({...job,[e.target.name]:e.target.value});
};
const handleSubmit = async(e)=>{
e.preventDefault();
const token = localStorage.getItem("token");
try{
await axios.post(
"http://localhost:5000/api/jobs/add",
job,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);
alert("Job Added Successfully!");
}catch(err){
alert("Only Admin Can Add Job");
console.log(err);
}
};
return( <div style={{width:"400px",margin:"auto",marginTop:"40px"}}>
<h2>Add Job</h2>
<form onSubmit={handleSubmit}>
<input name="title" placeholder="Job Title" onChange={handleChange} required/>
<br/><br/>
<input name="company" placeholder="Company" onChange={handleChange} 
required/>
<br/><br/>
<input name="location" placeholder="Location" onChange={handleChange} required/>
<br/><br/>
<input name="salary" placeholder="Salary" onChange={handleChange} required/>
<br/><br/>
<textarea name="description" placeholder="Description" onChange={handleChange} 
required/>
<br/><br/>
<button type="submit">Add Job</button>
</form>
</div>
);
}
export default AddJob;