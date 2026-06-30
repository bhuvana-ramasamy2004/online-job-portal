import { Link, useNavigate } from "react-router-dom";
function Navbar() {
const navigate = useNavigate();
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user")); const logout = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");
window.location.href = "/login";
};
return (
<nav style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "15px 30px",
background: "#0a090a",
color: "white"
}}>
{/* Logo */}
<h2>FresherWorld online job portal</h2>
 <div style={{ display: "flex", gap: "20px" }}>
 {/* If NOT Logged In */}
{!token && (
<>
<Link to="/" style={{ color: "white", textDecoration: "none" }}>
Register
</Link>
<Link to="/login" style={{ color: "white", textDecoration: "none" }}>
Login
</Link>
</>
)}
{/* If Logged In */}
{token && (
<> <Link to="/jobs" style={{ color: "white", textDecoration: "none" }}>Jobs </Link>
<Link to="/my-applications" style={{ color: "white", textDecoration: "none" }}>
My Applications
</Link>
 {/* Admin Only */}
{user?.role === "admin" && (
<Link to="/add-job" style={{ color: "white", textDecoration: "none" }}>
Add Job
</Link>
)}
 <button 
onClick={logout}
style={{
background: "red",
color: "white",
border: "none",
padding: "5px 10px",
cursor: "pointer"
}} > Logout</button> </>
)}
</div>
</nav>
);
}
export default Navbar;