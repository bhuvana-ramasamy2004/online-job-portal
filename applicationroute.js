const express = require("express");
const router = express.Router();
const Application = require("../models/application");
const jwt = require("jsonwebtoken");
const multer = require("multer");
// ======================
// Multer Setup (Resume Upload)
// ======================
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "uploads/");
},
filename: function (req, file, cb) {
cb(null, Date.now() + "-" + file.originalname);
},
});
const upload = multer({ storage: storage });
// ======================
// APPLY JOB (WITH FORM DATA)
// ======================
router.post("/apply", upload.single("resume"), async (req, res) => {
try {
const token = req.headers.authorization.split(" ")[1];
const decoded = jwt.verify(token, "secretkey");
// ✅ Check duplicate
const alreadyApplied = await Application.findOne({
jobId: req.body.jobId,
userId: decoded.userId,
});
if (alreadyApplied) {
return res.status(400).json("You already applied!");
}
// ✅ Create new application
const newApplication = new Application({
name: req.body.name,
phoneNumber:req.body.phoneNumber,
email:req.body.email,
city: req.body.city,
college: req.body.college,
course: req.body.course,
resume: req.file ? req.file.path : "",
jobId: req.body.jobId,
userId: decoded.userId,
});
await newApplication.save();
res.json("Application Submitted Successfully!");
} catch (err) {
console.log(err);
res.status(500).json("Server Error");
}
});