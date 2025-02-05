
import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String,
        unique: [true, "Email must be unique"],
        lowercase: true,
    },
    password: {
        type: String,
        minlength: [8, "Password must be at least 8 characters long"],
    }
},{
    timestamps: true,
    versionKey: false,
})

const User = mongoose.model("User", dataSchema);

export default User