import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;
const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log("Connected to DB");
    }catch(err){
        console.error("MongoDB connection error:", err.message);
    }
}
export default connectDB;