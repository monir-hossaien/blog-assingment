import bcrypt from 'bcrypt'
import User from "../Models/UserModel.js";
import {createToken} from "../Utility/jwt.js";

//register
export const createUserService = async (req) => {
    try {
        let { email, password, name } = req.body;
        let salt = bcrypt.genSaltSync(10);
        let hashPassword = bcrypt.hashSync(password, salt);
        const newUser = {
            name,
            email,
            password: hashPassword,
        };
        // find user is exits or not
        let user = await User.findOne({ email });
        if (user) {
            return { statusCode: 400, status: false, message: "User already exists" };
        }
        let result = await User.create(newUser);
        return {
            statusCode: 201,
            status: true,
            message: "Registration Success",
            data: result,
        };
    } catch (e) {
        console.error("Error during registration:", e);
        return {
            statusCode: 500,
            status: false,
            error: e.toString(),
            message: "Something went wrong! Please try again later"
        };
    }
};

//login
export const loginService = async (req) => {
    try {
        const { email, password } = req.body;
        // find user is exits or not
        let user = await User.findOne({email});
        if (!user) {
            return { statusCode: 404, status: false, message: "User not found" };
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            let token = await createToken(user["email"], user["id"]);
            return {
                statusCode: 200,
                status: true,
                message: "Login success",
                token: token,
            };
        }else{
            return {
                statusCode: 401,
                status: false,
                message: "Invalid email or password",
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            status: false,
            message: "Something went wrong!",
            error: err.message,
        };
    }
};

