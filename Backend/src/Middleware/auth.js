import {verifyToken} from "../Utility/jwt.js";

export const authenticateUser = async (req, res, next)=>{
    try {
        const token  = req.headers.token || req.cookies.token;
        if (!token) {
            return res.status(401).json(
                { statusCode: 404, status: 'fail', message: 'Unauthorized! please login' }
            );
        }
        let decoded = await verifyToken(token);
        if (!decoded) {
            return res.status(401).json(
                { statusCode: 404, status: 'fail', message: 'Invalid token. Please log in again.'}
            );
        }
        let email = decoded.email;
        let id = decoded.id;
        req.headers.id = id
        req.headers.email = email;
    }catch(err){
        console.log(err)
        return res.status(500).json({
            statusCode: 500,
            status: 'fail',
            message: 'An error occurred. Please try again later.',
        });
    }
    next()
}