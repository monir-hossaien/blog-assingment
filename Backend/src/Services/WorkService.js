
import mongoose from "mongoose";
import Service from "../Models/WorkModel.js";
import { getPublicID } from "../Helpers/helper.js";
import { deleteFile } from "../Middleware/fileUpload.js";

export const createServiceOffer = async (req) => {
    try {
        let reqBody = req.body;
        let image = req?.file?.path;
        reqBody.image = image;
        let result = await Service.create(reqBody);
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

export const getServiceList = async (req) => {
    try {
        let result = await Service.find();
        if (!result) {
            return {
                statusCode: 404,
                status: false,
                message: "No Service Found",
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
}


export const deleteServiceRequest = async (req) => {
    try {
        const id = req.params.serviceID;
        const serviceID = new mongoose.Types.ObjectId(id);
        const service = await Service.findOne({_id: serviceID});
        if(!service){
            return{
                statusCode: 404,
                status: false,
                message: "Service not found",
            }
        }
        await Service.deleteOne({_id: serviceID});

        //image delete from cloudinary
        let imageURL = service.image;
        let publicID = getPublicID(imageURL);
        
        
        await deleteFile(publicID)

        return {
            statusCode: 200,
            status: true,
            message: "Request Success",
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


export const updateServiceRequest = async (req) => {
    try {
        const serviceID = new mongoose.Types.ObjectId(req.params.serviceID);
        let reqBody = req.body;
        if(req.file){
            let image = req?.file?.path;
            reqBody.image = image;
        }
        const service = await Service.findOne({_id: serviceID});
        if(!service){
            return{
                statusCode: 404,
                status: false,
                message: "Service not found",
            }
        }
        //image delete from cloudinary
        let imageURL = service.image;
        let publicID = getPublicID(imageURL);
        await deleteFile(publicID)
        
        //update existing service
        await Service.findByIdAndUpdate({_id: serviceID}, {$set: reqBody}, {new: true});
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