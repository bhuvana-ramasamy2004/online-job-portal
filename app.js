import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import MyApplications from "./pages/myapplication";
import AddJob from "./pages/addjob";
import ApplyJob from "./pages/ApplyJob";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
function App() {
const token = localStorage.getItem("token");
return (
<>
<Navbar />
 <Routes>
 {/* Default Page */}
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} /> 
<Route
path="/"
element={token ? <Navigate to="/jobs" /> : <Register />}/>
<Route
path="/login"
element={token ? <Navigate to="/jobs" /> : <Login />}
/>
{/* Protected Routes */}
<Route
path="/jobs"
element={token ? <JobList /> : <Navigate to="/" />}
/>
<Route
path="/my-applications"
element={token ? <MyApplications /> : <Navigate to="/" />}
/>
<Route
path="/apply/:id"
element={token?<ApplyJob/>:<navigate to="/"/>}
/>
<Route 
path="/add-job"
element={
token?(
<AdminRoute>
<addJob/>
</AdminRoute>
):(
    <Navigate to="/" />
)
}
/>

</Routes>
</>
);
}
export default App;

