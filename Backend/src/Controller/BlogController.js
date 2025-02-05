import {createBlogService, blogListService, deleteBlogService, updateBlogService} from "../Services/BlogService.js"

export const createBlog = async (req, res)=>{
    const result = await createBlogService(req)
    return res.status(result.statusCode).json(result)
}

export const blogList = async (req, res)=>{
    const result = await blogListService(req)
    return res.status(result.statusCode).json(result)
}

export const deleteBlog = async (req, res)=>{
    const result = await deleteBlogService(req)
    return res.status(result.statusCode).json(result)
}

export const updateBlog = async (req, res)=>{
    const result = await updateBlogService(req)
    return res.status(result.statusCode).json(result)
}