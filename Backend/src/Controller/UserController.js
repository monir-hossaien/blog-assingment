import dotenv from 'dotenv';
dotenv.config();
import {createUserService, loginService} from "../Services/UserService.js";

export const createUser = async (req, res)=>{
    const result = await createUserService(req)
    return res.status(result.statusCode).json(result)
}

// login
export const login = async (req, res) => {
    let result = await loginService(req);
    let token = result.data;
    const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
        path: "/",
    };
    res.cookie("token", token, cookieOptions);
    res.status(result.statusCode).json(result);
};

//logout
export const logout = async(req, res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({ status: "true", message: "Logout success" });
      } catch (error) {
        console.log(error)
        res.status(500).json({status: "false", message: "Something went wrong"})
    }
}