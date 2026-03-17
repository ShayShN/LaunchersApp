import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export async function verifyToken(req, res, next) {
    const jwtUser = req.headers.authorization

    if (!jwtUser) {
        return res.status(404).json({ message: "not allowed!" })
    }

    const token = jwtUser.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "invalid token!" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message: "somthing wrong!"})
        
    }
}