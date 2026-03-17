import express from "express"
import { addUser, updateUser, deleteUser, loginUser, getActivateUser, getAllUsers } from "../controllers/controllersRegister.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()


router.post("/register/create", addUser)
router.put("/register/update/:id", updateUser)
router.delete("/register/delete/:id", deleteUser)
router.post("/login", loginUser)
router.get("/getUser", verifyToken, getActivateUser)
router.get("/getAllUsers", verifyToken, getActivateUser)


export default router











