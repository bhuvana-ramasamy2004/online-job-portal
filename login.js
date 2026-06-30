import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
const [userData, setUserData] = useState({
email: "",
password: ""
});
const navigate = useNavigate(); // ✅ MOVE HERE (top level)
const handleChange = (e) => {
setUserData({
...userData,
[e.target.name]: e.target.value
});
};
const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await axios.post(
"http://localhost:5000/api/auth/login",
userData
);
// Save token & user
localStorage.setItem("user", JSON.stringify(res.data.user));
localStorage.setItem("token", res.data.token);
alert("Login Successful");
window.location.href = "/jobs";
} catch (err) {
alert("Invalid Email or Password");
console.log(err);
}
};
return (
<div style={{ width: "300px", margin: "auto", marginTop: "100px" }}>
<h2>Login</h2>
 <form onSubmit={handleSubmit}>
<input
name="email"
placeholder="Email"
onChange={handleChange}
required
/>
<br /><br />
<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
required />
<br /><br />
<button type="submit">Login</button>
</form></div>
);
}export default Login;