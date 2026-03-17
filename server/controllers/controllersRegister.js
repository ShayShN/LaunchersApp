import { ObjectId } from "mongodb"
import { getDB } from "../db.js"

export async function addUser(req, res) {
    const db = getDB()
    const launchersCollection = db.collection("register_users")

    
}