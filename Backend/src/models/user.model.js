const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true,"username already taken"],
        required: [true,"username is required"]
    },
    email: {
        type: String,
        required: [true,"email is required"],
        unique: [true,"account already exists with this email"]
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema)
module.exports = userModel