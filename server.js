const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
 mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.use("/api/auth", require("./routes/authroute"));
app.use("/api/jobs", require("./routes/jobroute"));
const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/applications", applicationRoutes);
app.use("/uploads", express.static("uploads"));
app.listen(5000, () => {
console.log("Server running on port 5000");
})