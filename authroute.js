const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();
/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
try {
const { name, email, password, role } = req.body;
 const existingUser = await User.findOne({ email });
if (existingUser) {
return res.status(400).json({ message: "Email already exists" });
}
const hashedPassword = await bcrypt.hash(password,
10);
 const user = new User({
name,
email,
password: hashedPassword,
role: role || "user" // default user
});
await user.save();
res.status(201).json({ message: "User Registered Successfully" });
} catch (err) {
console.log(err);
res.status(500).json({ message: "Registration failed" });
}
});/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
try {
const user = await User.findOne({ email: req.body.email });
if (!user) {
return res.status(400).json({ message: "User not found" });
}
 const isMatch = await bcrypt.compare(
req.body.password,
user.password
);
if (!isMatch) {
return res.status(400).json({ message: "Invalid password" });
}
const token = jwt.sign(
{
userId: user._id, // IMPORTANT
role: user.role
},
"secretkey",
{ expiresIn: "1d" }
);
 res.json({
token,
user: {
_id: user._id,
name: user.name,
email: user.email,
role:user.role
}
});
}catch(err){
    console.log(err);
    res.status(500).json({message:"serverError"});
}
});
module.exports=router;
