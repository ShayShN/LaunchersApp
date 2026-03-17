import { ObjectId } from "mongodb"
import { getDB } from "../db.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export async function addUser(req, res) {
    try {
        const db = getDB()
        const registerUsers = db.collection("register_users")

        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            user_type: req.body.user_type

        }
        const insertUser = await registerUsers.insertOne(newUser)

        if (!insertUser) {
            return res.status(401).json({ msg: "not created!" })
        }
        res.status(201).json({ insertUser })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export async function updateUser(req, res) {
    try {
        const db = getDB()
        const registerUsers = db.collection("register_users")

        const updateUser = await registerUsers.updateOne({ _id: new ObjectId(req.params.id) },
            {
                $set: {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    user_type: req.body.user_type,
                    last_login: null

                }
            })

        const showUpdate = await registerUsers.findOne({ _id: new ObjectId(req.params.id) })

        res.status(200).json({ showUpdate })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteUser(req, res) {
    try {
        const db = getDB()
        const registerUsers = db.collection("register_users")

        await registerUsers.deleteOne({ _id: new ObjectId(req.params.id) })

        res.status(200).json({ msg: "user deleted!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function loginUser(req, res) {
    try {
        const db = getDB()
        const registerUsers = db.collection("register_users")

        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ message: "name or pass are missing!" })
        }
        const found = await registerUsers.findOne({
            username: username,
            password: password
        })

        if (!found) {
            return res.status(400).json({ message: "user not found!" })
        }
        const token = jwt.sign(
            {
                username: found.username,
                password: found.password,
                user_type: found.user_type
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        await registerUsers.updateOne({ password: password },
            {
                $set: {
                    last_login: new Date().toISOString()
                }
            }
        )
        res.json({
            token: token,
            found: found
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getActivateUser(req, res) {
    try {
        res.status(200).json({ user: req.user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}