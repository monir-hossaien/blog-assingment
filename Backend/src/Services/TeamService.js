import { getPublicID } from "../Helpers/helper.js";
import { deleteFile } from "../Middleware/fileUpload.js";
import TeamMember from "../Models/TeamModel.js";
import mongoose from "mongoose";

export const createTeamMemberService = async (req) => {
    try {
        let reqBody = req.body;
        if(req.file){
            let image = req?.file?.path;
            reqBody.image = image;
        }
        let result = await TeamMember.create(reqBody);
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


export const teamMemberListService = async () => {
    try {
        let result = await TeamMember.find();
        if (result.length === 0) {
            return {
                statusCode: 404,
                status: false,
                message: "No Member Found",
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


export const deleteMemberService = async (req) => {
    try {
    
        let memberID = new mongoose.Types.ObjectId(req.params.id)
        let member = await TeamMember.findOne({_id: memberID})
        if (!member) {
            return {
                statusCode: 404,
                status: false,
                message: "No member Found",
            }
        }
        let imageURL = member.image
        await TeamMember.deleteOne({_id: memberID})

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

export const updateMemberService = async (req) => {
    try {
        const memberID = new mongoose.Types.ObjectId(req.params.id);
        let reqBody = req.body;
        console.log(reqBody);
        
        if(req.file){
            let image = req?.file?.path;
            reqBody.image = image
        }
        const member = await TeamMember.findOne({_id: memberID});
        if(!member){
            return{
                statusCode: 404,
                status: false,
                message: "member not found",
            }
        }
        //image delete from cloudinary
        let imageURL = member.image;
        let publicID = getPublicID(imageURL);
        await deleteFile(publicID)
        
        //update existing service
        await TeamMember.findByIdAndUpdate({_id: memberID}, {$set: reqBody}, {new: true});
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
            message: "Something went wrong!",
        };
    }
}