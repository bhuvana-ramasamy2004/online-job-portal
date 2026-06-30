const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema({
name: String,
phoneNumber:String,
email:String,
city: String,
college: String,
course: String,
resume: String, // file path
jobId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Job",
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
    }, { timestamps: true });
    module.exports = mongoose.model("Application", applicationSchema);