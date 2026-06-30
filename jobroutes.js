const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const { protect, adminOnly } = require("../middleware/authMiddleware");
/* ================= GET ALL JOBS ================= */
router.get("/", async (req, res) => {
try {
const jobs = await Job.find();
res.json(jobs);
} catch (error) {
console.log(error);
res.status(500).json({ message: "Server Error" });
} });
/* ================= ADD JOB (ADMIN ONLY) ================= */
router.post("/add", protect, adminOnly, async (req, res) => {
try {
    const { title, company, location, salary, description } = req.body;
const newJob = new Job({
title,
company,
location,
salary,
description
});
await newJob.save();
res.status(201).json({ message: "Job added successfully" });
} catch (error) {
console.log(error);
res.status(500).json({ message: "Server Error" });
}
});
module.exports = router;