import { useNavigate } from "react-router-dom";
function Home() {
const navigate = useNavigate();
return (
<div
style={{
height: "100vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg, #4e73df, #1cc88a, #36b9cc)",
color: "black",
textAlign: "center",
padding: "20px"
}}
> 
<h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
🚀 Welcome to FresherWorld Job Portal
</h1>
 <p style={{ fontSize: "20px", maxWidth: "600px", marginBottom: "40px" }}>
It is a best platform for freshers.
Find your dream job or hire the best talent.
</p>
 <div style={{ display: "flex", gap: "20px" }}>
<button
onClick={() => navigate("/register")}
style={{
padding: "12px 25px",
fontSize: "16px",
background: "white",
color: "#4e73df",
border: "none",
borderRadius: "30px",
cursor: "pointer",
fontWeight: "bold"
}}>Register
</button>
 <button
onClick={() => navigate("/login")}
style={{
padding: "12px 25px",
fontSize: "16px",
background: "transparent",
color: "white",
border: "2px solid white",
borderRadius: "30px",
cursor: "pointer",
fontWeight: "bold"
}} > Login</button>
</div></div>
);
}
export default Home;