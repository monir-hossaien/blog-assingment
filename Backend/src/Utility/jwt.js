import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
dotenv.config();

export const createToken = (email, id)=>{
    const payload = {email, id}
    const key = process.env.JWT_KEY
    const duration = process.env.JWY_EXPIRE_TIME
    let token = jwt.sign(payload, key, {expiresIn: duration});
    return token;
}


export const verifyToken = async(token)=>{
    try {
        const key = process.env.JWT_KEY
        let decoded = await jwt.verify(token, key);
        return decoded;
    }
    catch(err){
        return err.message;
    }
}