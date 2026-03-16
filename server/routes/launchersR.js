// import express from "express"
// import { ObjectId } from "mongodb"
// import { getDB } from "../db.js"

// const router = express.Router()


// router.get("/", async (req, res) => {

//     try {
//         const db = getDB()
//         const launchersCollection = db.collection("launchers")

//         const findAll = await launchersCollection.find({}).toArray()

//         if (!findAll) {
//             return res.status(401).json({ msg: "not found" })
//         }
//         res.status(200).json({ findAll })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })


// router.get("/id", async (req, res) => {
//     try {
//         const db = getDB()
//         const launchersCollection = db.collection("launchers")

//         const launcherOne = await launchersCollection.findOne({ _id: new ObjectId(req.headers.id) })

//         if (!launcherOne) {
//             return res.status(401).json({ msg: "not found" })
//         }
//         res.json({ launcherOne })
//     } catch (error) {
//         res.status(500).json({ message: error.message })

//     }

// })

// router.post("/", async (req, res) => {
//     try {
//         const db = getDB()
//         const launchersCollection = db.collection("launchers")

//         const newLaunch = {
//             city: req.body.city,
//             rocketType: req.body.rocketType,
//             latitude: req.body.latitude,
//             longitude: req.body.longitude,
//             name: req.body.name
//         }

//         const createLaunch = await launchersCollection.insertOne(newLaunch)

//         if (!createLaunch) {
//             return res.status(401).json({ msg: "not create!" })
//         }
//         res.status(201).json({ createLaunch })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }


// })

// router.put("/:id", async (req, res) => {
//     try {
//         const db = getDB()
//         const launchersCollection = db.collection("launchers")

//         const updateLaunch = await launchersCollection.updateOne({ _id: new ObjectId(req.params.id) },
//             {
//                 $set: {
//                     city: req.body.city,
//                     rocketType: req.body.rocketType,
//                     latitude: req.body.latitude,
//                     longitude: req.body.longitude,
//                     name: req.body.name
//                 }
//             })

//         const showUpdate = await launchersCollection.findOne({ _id: new ObjectId(req.params.id) })

//         res.status(200).json({ showUpdate })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })

// export default router






import express from "express"
import { getAllLaunchers, getOneLaunch, createLaunch, updateLaunch, deleteLaunch } from "../controllers/controllersLaunchers.js"

const router = express.Router()

router.get("/", getAllLaunchers)
router.get("/id", getOneLaunch)
router.post("/", createLaunch)
router.put("/:id", updateLaunch)
router.delete("/:id", deleteLaunch)

export default router