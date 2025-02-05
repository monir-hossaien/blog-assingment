
import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        minlength: [8, "Content must be at least 8 characters long"],
        required: true,
        trim: true,
    },
    image:{
        type: String
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},{
    timestamps: true,
    versionKey: false,
})

const Blog = mongoose.model("Blog", dataSchema);

export default Blog