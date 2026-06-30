import { useState } from "react";
import axios from "axios";
function Register() {
const [user, setUser] = useState({
email:"",
password:""
});
const handleChange = (e)=>{
setUser({
...user,
[e.target.name]: e.target.value
});
};
const handleSubmit = async (e)=>{
e.preventDefault();
try {
 await axios.post(
"http://localhost:5000/api/auth/register",user
);
alert("✅ Registered Successfully!");
// ⭐ GO TO LOGIN PAGE
window.location.href="/login";
} catch(err){
console.log(err);
alert("❌ Registration Failed");
}
};
return(
<div style={{
width:"350px", 
margin:"auto",
marginTop:"100px",
textAlign:"center"
}}>
<h2>Register</h2>
<form onSubmit={handleSubmit}>
 <input
type="text"
name="name"
placeholder="Enter your name"
onChange={handleChange}
required
/> <br/><br/>
<input
type="text"
name="role"
placeholder="Enter your role"
onChange={handleChange}
required
/> <br/><br/>
<input
 type="email"
name="email"
placeholder="Enter Email"
onChange={handleChange}
required
/>
 <br/><br/>
 <input
type="password"
name="password"
placeholder="Enter Password"
onChange={handleChange}
required
/>
 <br/><br/>
 <button type="submit">
Register
</button>
</form></div>
);
}
export default Register;