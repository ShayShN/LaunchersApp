import express from "express"
import { addUser, updateUser, deleteUser, loginUser, getActivateUser } from "../controllers/controllersRegister.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()


router.post("/register/create", addUser)
router.put("/register/update/:id", updateUser)
router.delete("/register/delete/:id", deleteUser)
router.post("/login", loginUser)
router.post("/getUser", verifyToken, getActivateUser)


export default router











