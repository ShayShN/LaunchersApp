import { ObjectId } from "mongodb"
import { getDB } from "../db.js"

export async function getAllLaunchers(req, res) {

    try {
        const db = getDB()
        const launchersCollection = db.collection("launchers")

        const findAll = await launchersCollection.find({}).toArray()

        if (!findAll) {
            return res.status(401).json({ msg: "not found" })
        }
        res.status(200).json( findAll )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getOneLaunch(req, res) {
    try {
        const db = getDB()
        const launchersCollection = db.collection("launchers")

        const launcherOne = await launchersCollection.findOne({ _id: new ObjectId(req.headers.id) })

        if (!launcherOne) {
            return res.status(401).json({ msg: "not found" })
        }
        res.json({ launcherOne })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}

export async function createLaunch(req, res) {
    try {
        const db = getDB()
        const launchersCollection = db.collection("launchers")

        const newLaunch = {
            city: req.body.city,
            rocketType: req.body.rocketType,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            name: req.body.name
        }

        const createLaunch = await launchersCollection.insertOne(newLaunch)

        if (!createLaunch) {
            return res.status(401).json({ msg: "not create!" })
        }
        res.status(201).json({ createLaunch })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export async function deleteLaunch(req, res) {
    try {
        const db = getDB()
        const launchersCollection = db.collection("launchers")
    
        await launchersCollection.deleteOne({_id: new ObjectId(req.params.id)})
       
        res.status(200).json({msg: "launche delete!"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateLaunch(req, res) {
    try {
        const db = getDB()
        const launchersCollection = db.collection("launchers")

       const updateLaunch = await launchersCollection.updateOne({ _id: new ObjectId(req.params.id) },
            {
                $set: {
                    city: req.body.city,
                    rocketType: req.body.rocketType,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    name: req.body.name
                }
            })

        const showUpdate = await launchersCollection.findOne({ _id: new ObjectId(req.params.id) })

        res.status(200).json({ showUpdate })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}