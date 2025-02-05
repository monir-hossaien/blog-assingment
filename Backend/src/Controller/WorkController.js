import {createServiceOffer, getServiceList, deleteServiceRequest, updateServiceRequest} from "../Services/WorkService.js";


export const createService = async (req, res)=>{
    const result = await createServiceOffer(req)
    return res.status(result.statusCode).json(result)
}

export const serviceList = async (req, res)=>{
    const result = await getServiceList()
    return res.status(result.statusCode).json(result)
}

export const deleteService = async (req, res)=>{
    const result = await deleteServiceRequest(req)
    return res.status(result.statusCode).json(result)
}


export const updateService = async (req, res)=>{
    const result = await updateServiceRequest(req)
    return res.status(result.statusCode).json(result)
}