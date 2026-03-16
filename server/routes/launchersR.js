import express from "express"
import { getAllLaunchers, getOneLaunch, createLaunch, updateLaunch, deleteLaunch } from "../controllers/controllersLaunchers.js"

const router = express.Router()

router.get("/", getAllLaunchers)
router.get("/id", getOneLaunch)
router.post("/", createLaunch)
router.put("/:id", updateLaunch)
router.delete("/:id", deleteLaunch)

export default router