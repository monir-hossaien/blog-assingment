import {createTeamMemberService, teamMemberListService, deleteMemberService, updateMemberService} from "../Services/TeamService.js";

export const createTeamMember = async (req, res)=>{
    const result = await createTeamMemberService(req)
    return res.status(result.statusCode).json(result)
}

export const teamMemberList = async (req, res)=>{
    const result = await teamMemberListService()
    return res.status(result.statusCode).json(result)
}

export const deleteMember = async (req, res)=>{
    const result = await deleteMemberService(req)
    return res.status(result.statusCode).json(result)
}

export const updateMember = async (req, res)=>{
    const result = await updateMemberService(req)
    return res.status(result.statusCode).json(result)
}