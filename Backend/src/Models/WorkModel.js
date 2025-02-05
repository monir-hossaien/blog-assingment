
import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    shortDes: {
        type: String,
        minlength: [8, "Password must be at least 8 characters long"],
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

const Service = mongoose.model("service", dataSchema);

export default Service