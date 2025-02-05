import dotenv from "dotenv";
dotenv.config()
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'

// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "blog", // Folder name in Cloudinary
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 2 * 1024 * 1024}, //2MB
});


export default upload;


// delete file
export const deleteFile = async (publicID)=>{
    try{
        let res = await cloudinary.uploader.destroy(`blog/${publicID}`)
        
        if(res.result === 'ok'){
            return { message: "Image deleted successfully" };
        }else{
            return{ message: "Failed to delete image" };
        }
    }catch(err){
        return{ message: "Error deleting image", error: error.message };
    }
}
