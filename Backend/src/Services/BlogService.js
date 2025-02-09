import mongoose from "mongoose";

import { getPublicID } from "../Helpers/helper.js";
import { deleteFile } from "../Middleware/fileUpload.js";
import Blog from './../Models/BlogModel.js';

export const createBlogService = async (req) => {
    try {
        let userID = req.headers.id
        let reqBody = req.body;
        let image = req?.file?.files[0];
        console.log(image)
        reqBody.image = image;
        reqBody.userID = userID
        let result = await Blog.create(reqBody);
        return {
            statusCode: 201,
            status: true,
            message: "Request Success",
            data: result,
        };
    } catch (e) {
        console.error("Error during registration:", e);
        return {
            statusCode: 500,
            status: false,
            error: e.toString(),
            message: "Something went wrong!"
        };
    }
};

export const blogListService = async (req) => {
    try {
        const joinWithUser = {
            $lookup:{
                from: "users",
                localField: "userID",
                foreignField: "_id",
                as: "user",
            }
        }
        const projection = {
            $project: {
                "user.password": 0,
                "user._id": 0,
                "user.createdAt": 0,
                "user.updatedAt": 0,
                "user.email": 0,
            }
        }
        let unWind = {$unwind: "$user"}
        let result = await Blog.aggregate([joinWithUser, unWind, projection])
        if (!result) {
            return {
                statusCode: 404,
                status: false,
                message: "No Blogs Found",
            }
        }
        return {
            statusCode: 200,
            status: true,
            message: "Request Success",
            data: result,
        };
    } catch (e) {
        console.error("Error during registration:", e);
        return {
            statusCode: 500,
            status: false,
            error: e.toString(),
            message: "Something went wrong!"
        };
    }
};

export const deleteBlogService = async (req) => {
    try {
        let id = req.headers.id
        let blogID = new mongoose.Types.ObjectId(req.params.blogID)
        let userID = new mongoose.Types.ObjectId(id)
        let blog = await Blog.findOne({userID:userID, _id: blogID})
        if (!blog) {
            return {
                statusCode: 404,
                status: false,
                message: "No Blog Found",
            }
        }
        let imageURL = blog.image
        await Blog.deleteOne({_id: blogID})

        let publicID = getPublicID(imageURL)
        // blog image from cloudinary
        await deleteFile(publicID)
        return {
            statusCode: 200,
            status: true,
            message: "Request Success"
        };
    } catch (e) {
        console.error("Error during registration:", e);
        return {
            statusCode: 500,
            status: false,
            error: e.toString(),
            message: "Something went wrong!"
        };
    }
};

export const updateBlogService = async (req) => {
    try {
        let userID = new mongoose.Types.ObjectId(req.headers.id)
        const blogID = new mongoose.Types.ObjectId(req.params.blogID);
        let reqBody = req.body;
        if(req.file){
            let image = req?.file?.path;
            reqBody.image = image;
        }
        const blog = await Blog.findOne({_id: blogID, userID});
        if(!blog){
            return{
                statusCode: 404,
                status: false,
                message: "Blog not found",
            }
        }
        //image delete from cloudinary
        let imageURL = blog.image;
        let publicID = getPublicID(imageURL);
        await deleteFile(publicID)

        //update existing service
        await Blog.findByIdAndUpdate({_id: blogID}, {$set: reqBody}, {new: true});
        return {
            statusCode: 200,
            status: true,
            message: "Update Successfully",
        };
    } catch (e) {
        console.error("Error during registration:", e);
        return {
            statusCode: 500,
            status: false,
            error: e.toString(),
            message: "Something went wrong!"
        };
    }
}